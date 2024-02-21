
const router = require('express').Router();
const { Category, Product } = require('../../models');


// The `/api/categories` endpoint

router.get('/',async (req, res) => {
  try {
    const categories = await Category.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(categories);
  } catch(err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });
    if (!category) {
      res.status(404).json({ message: 'Category not found' });
      return;
    }
    res.status(200).json(category);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    let newCategory = await Category.create(req.body);
    res.status(201).json(newCategory);
  } catch (err) {    
    res.status(400).json(err);
  }
});

router.put('/:id', async (req,res) => {
  try {
    const updatedCat = await Category.update(req.body,{
      where: {
        id: req.params.id,
      },
    });

    if (!updatedCat) {
      res.status(404).json({ message: 'Category not found' });
      return;
    }

    res.status(200).json({ message: 'Category updated' });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    // handle foreign key constraints - if any - first
    const relatedRecords = await Product.findAll({
      where: {
        category_id: req.params.id,
      },
    });
    if (relatedRecords.length > 0) {
      await Product.destroy({
        where: {
          category_id: req.params.id,
        },
      });
    }
    // proceed with 'deletion'
    const deletedCategory = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!deletedCategory) {
      res.status(404).json({ message: 'Category not found' });
      return;
    }
    res.status(200).json({ message: 'Category deleted' });
  } catch (err) {
    res.status(500).json(err);
  }
});



module.exports = router;
