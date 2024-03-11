const FormRegistration = require('../models/formRegistration');
// const User = require('../models/userRegistration');

const registerForm = async (req, res) => {
  try {
    res.render('form-registration');
  } catch (error) {
    console.log(error.message);
  }
};

const insertUserForm = async (req, res) => {
  try {
    // const userSessionId = req.session.user_id;
    // if (!userSessionId) {
    //   console.error('User session ID is missing.');
    //   return res.redirect('/login');
    // }
    // const userSessionData = await User.findById(userSessionId);

    // if (!userSessionData) {
    //   console.error('User data not found.');
    //   return res.redirect('/login');
    // }

    // // // Now userData contains the user information
    // console.log('User Data:', userSessionData);

    const formData = {
      // user:userSessionData._id,
      personalInformation: {
        firstName: req.body['personalInformation.firstName'] || '',
        middleName: req.body['personalInformation.middleName'] || '',
        lastName: req.body['personalInformation.lastName'] || '',
        gender: req.body['personalInformation.gender'] || '',
        birthday: req.body['personalInformation.birthday'] || '',
        birthTime: req.body['personalInformation.birthTime'] || '',
        birthPlace: req.body['personalInformation.birthPlace'] || '',
        nativePlace: req.body['personalInformation.nativePlace'] || '',
        religion: req.body['personalInformation.religion'] || '',
        cast: req.body['personalInformation.cast'] || '',
        figure: req.body['personalInformation.figure'] || '',
        weight: req.body['personalInformation.weight'] || '',
        height: req.body['personalInformation.height'] || '',
        complexion: req.body['personalInformation.complexion'] || '',
        bloodGroup: req.body['personalInformation.bloodGroup'] || '',
        maritalStatus: req.body['personalInformation.maritalStatus'] || '',
      },
      languagesKnown: {
        language1: req.body['languagesKnown.language1'] || '',
        language2: req.body['languagesKnown.language2'] || '',
        language3: req.body['languagesKnown.language3'] || '',
      },
      educationDetails: {
        type: req.body['educationDetails.type'] || '',
        tenthSchoolName: req.body['educationDetails.tenthSchoolName'] || '',
        tenthMarks: req.body['educationDetails.tenthMarks'] || '',
        diplomaCollegeName: req.body['educationDetails.diplomaCollegeName'] || '',
        diplomaCourseName: req.body['educationDetails.diplomaCourseName'] || '',
        diplomaMarks: req.body['educationDetails.diplomaMarks'] || '',
        twelfthCollegeName: req.body['educationDetails.twelfthCollegeName'] || '',
        twelfthCourseName: req.body['educationDetails.twelfthCourseName'] || '',
        twelfthMarks: req.body['educationDetails.twelfthMarks'] || '',
        graduationCollegeName: req.body['educationDetails.graduationCollegeName'] || '',
        graduationCourseName: req.body['educationDetails.graduationCourseName'] || '',
        graduationMarks: req.body['educationDetails.graduationMarks'] || '',
        postGraduationCollegeName: req.body['educationDetails.postGraduationCollegeName'] || '',
        postGraduationCourseName: req.body['educationDetails.postGraduationCourseName'] || '',
        postGraduationSpecialization: req.body['educationDetails.postGraduationSpecialization'] || '',
        postGraduationMarks: req.body['educationDetails.postGraduationMarks'] || '',
        phdCollegeName: req.body['educationDetails.phdCollegeName'] || '',
        phdCourseName: req.body['educationDetails.phdCourseName'] || '',
        phdSpecialization: req.body['educationDetails.phdSpecialization'] || '',
        phdMarks: req.body['educationDetails.phdMarks'] || '',
      },
      professionalDetails: {
        type: req.body['professionalDetails.type'] || '',
        serviceName: req.body['professionalDetails.serviceName'] || '',
        serviceAddress: req.body['professionalDetails.serviceAddress'] || '',
        serviceDesignation: req.body['professionalDetails.serviceDesignation'] || '',
        serviceSalary: req.body['professionalDetails.serviceSalary'] || '',
        businessName: req.body['professionalDetails.businessName'] || '',
        businessAddress: req.body['professionalDetails.businessAddress'] || '',
        businessDesignation: req.body['professionalDetails.businessDesignation'] || '',
        businessIncome: req.body['professionalDetails.businessIncome'] || '',
      },
      fatherDetails: {
        firstName: req.body['fatherDetails.firstName'] || '',
        middleName: req.body['fatherDetails.middleName'] || '',
        lastName: req.body['fatherDetails.lastName'] || '',
        status: req.body['fatherDetails.status'] || '',
        contact: req.body['fatherDetails.aliveFields.contact'] || '',
        profession: req.body['fatherDetails.aliveFields.profession'] || '',
      },
      motherDetails: {
        firstName: req.body['motherDetails.firstName'] || '',
        lastName: req.body['motherDetails.lastName'] || '',
        status: req.body['motherDetails.status'] || '',
        contact: req.body['motherDetails.aliveFields.contact'] || '',
        profession: req.body['motherDetails.aliveFields.profession'] || '',
      },
      maternalSurname: {
        surName: req.body['maternalSurname.surName'] || '',
      },
      relativesSurname: {
        surName1: req.body['relativesSurname.surName1'] || '',
        surName2: req.body['relativesSurname.surName2'] || '',
        surName3: req.body['relativesSurname.surName3'] || '',
      },
      elderSiblings:[
        {
          firstName: req.body['elderSiblings.elderSiblingsOneFirstName'] || '',
          lastName: req.body['elderSiblings.elderSiblingsOneLastName'] || '',
          maritalStatus: req.body['elderSiblings.elderSiblingsOneMaritalStatus'] || '',
        },
        {
          firstName: req.body['elderSiblings.elderSiblingsTwoFirstName'] || '',
          lastName: req.body['elderSiblings.elderSiblingsTwoLastName'] || '',
          maritalStatus: req.body['elderSiblings.elderSiblingsTwoMaritalStatus'] || '',
        },
        {
          firstName: req.body['elderSiblings.elderSiblingsThreeFirstName'] || '',
          lastName: req.body['elderSiblings.elderSiblingsThreeLastName'] || '',
          maritalStatus: req.body['elderSiblings.elderSiblingsThreeMaritalStatus'] || '',
        },
      ],
      youngerSiblings:[
        {
          firstName: req.body['youngerSiblings.youngerSiblingsOneFirstName'] || '',
          lastName: req.body['youngerSiblings.youngerSiblingsOneLastName'] || '',
          maritalStatus: req.body['youngerSiblings.youngerSiblingsOneMaritalStatus'] || '',
        },
        {
          firstName: req.body['youngerSiblings.youngerSiblingsTwoFirstName'] || '',
          lastName: req.body['youngerSiblings.youngerSiblingsTwoLastName'] || '',
          maritalStatus: req.body['youngerSiblings.youngerSiblingsTwoMaritalStatus'] || '',
        },
        {
          firstName: req.body['youngerSiblings.youngerSiblingsThreeFirstName'] || '',
          lastName: req.body['youngerSiblings.youngerSiblingsThreeLastName'] || '',
          maritalStatus: req.body['youngerSiblings.youngerSiblingsThreeMaritalStatus'] || '',
        },
      ],
      spousePreference: {
        complexion: req.body['spousePreference.complexion'] || '',
        height: req.body['spousePreference.height'] || '',
        physique: req.body['spousePreference.physique'] || '',
      },
      otherDetails: {
        aboutSelf: req.body['otherDetails.aboutSelf'] || '',
        foodPreference: req.body['otherDetails.foodPreference'] || '',
      },
      contactInformation: {
        country: req.body['contactInformation.country'] || '',
        state: req.body['contactInformation.state'] || '',
        city: req.body['contactInformation.city'] || '',
        villageTown: req.body['contactInformation.villageTown'] || '',
        pin: req.body['contactInformation.pin'] || '',
      },
    };

    console.log('Form data: ',formData );
    
     const cleanFormData = cleanEmptyStrings(formData);
    console.log('clean form data',cleanFormData);
    const formInstance = new FormRegistration(cleanFormData);
    console.log('form instance:',formInstance);

    // Save the instance to the database
    const userData = await formInstance.save();

    if (userData) {
      console.log('user data after saving',userData);
      res.redirect('home');
    } else {
      res.render('form-registration', { message: 'Fill All Details' });
    }
  } catch (error) {
    console.log(error.message);
    // res.render('form-registration', { message: 'Error occurred during form submission' });
  }
};

// Function to remove fields with empty strings recursively
const cleanEmptyStrings = (obj) => {
  for (const key in obj) {
    if (typeof obj[key] === 'object') {
      obj[key] = cleanEmptyStrings(obj[key]);

      // Check if the object is empty after cleaning
      if (Object.keys(obj[key]).length === 0) {
        delete obj[key];
      }
    } else if (obj[key] === '' || obj[key] === null) {
      // Remove empty string or null values
      delete obj[key];
    }
  }
  return obj;
};


module.exports = {
  registerForm,
  insertUserForm,
};
