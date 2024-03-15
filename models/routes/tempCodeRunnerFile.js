
// // READ all recipes
// router.get('/recipes', async (req, res) => {
//     try {
//         const recipes = recipesData;
//         res.render('index', { recipes });
//     } catch (err) {
//         console.error(err);
//         res.status(500).send('Server Error');
//     }
// });

// // EDIT recipe
// router.get('/recipes/:id/edit', async (req, res) => {
//     try {
//         const recipe = recipesData.find(recipe => recipe._id === req.params.id);
//         res.render('edit', { recipe });
//     } catch (err) {
//         console.error(err);
//         res.status(500).send('Server Error');
//     }
// });

// // UPDATE recipe
// router.post('/recipes/:id/edit', async (req, res) => {
//     try {
//         const updatedRecipe = req.body;
//         console.log('Updated Recipe:', updatedRecipe);
//         res.redirect('/recipes');
//     } catch (err) {
//         console.error(err);
//         res.status(500).send('Server Error');
//     }
// });

// // DELETE recipe
// router.post('/recipes/:id/delete', async (req, res) => {
//     try {
//         console.log('Recipe deleted:', req.params.id);
//         res.redirect('/recipes');
//     } catch (err) {
//         console.error(err);
//         res.status(500).send('Server Error');
//     }
// });

// module.exports = router;
