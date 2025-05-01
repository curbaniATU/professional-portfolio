exports.home = (req, res) => {
  res.render('home', { 
    title: 'Home', 
    name: 'Caleb Urbani',
    image: 'images/head-shot.jpg',
    summary: 'My name is Caleb Urbani and I am a Computer Science major at Arkansas Tech University. ' +
      'I started college in 2021 as a Computer Engineering Major before switching to Computer Science in 2023. ' +
      'I will be graduating in May of 2025. My primary interests are in automation, web development, backend development, and database design.',
    github: 'https://github.com/curbaniATU',
    linkedIn: 'https://www.linkedin.com/in/caleb-urbani-030645354/'
   });
}

exports.education = async (req, res) => {
  const Education = require('../models/Education');
  try {
    const education = await Education.find({});
    console.log(education);
    res.render('education', { 
      title: 'Education',
      logo: 'images/ATU_LOGO.png', 
      education: education 
    });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error retrieving education data');
  }
}