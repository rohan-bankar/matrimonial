const mongoose = require("mongoose");

const formRegistrationSchema = new mongoose.Schema({
//   user: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User',
//     // required: true,
// },
    personalInformation: {
        firstName: { type: String,
                     required: true },
        middleName:{type:String,
                    required:true}, 
        lastName: { type: String, 
                    required: true },
        gender: { type: String, 
                    required: true,
                    enum:['Male','Female','Other'] },
        birthday: { type: Date, 
                    required: true },
        birthTime: {
                    type: String,
                    required: true},
        birthPlace: { type: String, 
                    required: true },
        nativePlace: { type: String,
                    required: true },
        religion: { type: String,
                    required: true },
        cast: { type: String, 
                    required: true },
        figure:{type:String,
                enum:['Average','Athletic','Slim','Fit','Muscular','Curvy','Slightly Overweight']},
        weight: { type: Number, 
                  required: true },
        height: { type: Number,
                      required: true },
        complexion:{type:String,
                    enum:['Very Dark','Dark','Whitish','Fair','Very Fair']},
        bloodGroup: { type: String, 
                      required: true,
                      enum:['A+','A','B+','B','O+','O','AB+','AB'] },
        maritalStatus: { type: String, 
                         required: true,
                         enum:['Single','Widow','Widower','Divorce'] },
      },
      languagesKnown: {
        language1: { type: String, 
                    required: true,
                    enum: [
                      'Assamese',
                      'Bengali',
                      'Bodo',
                      'Dogri',
                      'English',
                      'Gujarati',
                      'Hindi',
                      'Kannada',
                      'Kashmiri',
                      'Konkani',
                      'Maithili',
                      'Malayalam',
                      'Marathi',
                      'Meitei',
                      'Nepali',
                      'Odia',
                      'Punjabi',
                      'Sanskrit',
                      'Santali',
                      'Sandhi',
                      'Tamil',
                      'Telugu',
                      'Urdu'
                    ], },
        language2: { type: String,
                    required: true,
                    enum: [
                      'Assamese',
                      'Bengali',
                      'Bodo',
                      'Dogri',
                      'English',
                      'Gujarati',
                      'Hindi',
                      'Kannada',
                      'Kashmiri',
                      'Konkani',
                      'Maithili',
                      'Malayalam',
                      'Marathi',
                      'Meitei',
                      'Nepali',
                      'Odia',
                      'Punjabi',
                      'Sanskrit',
                      'Santali',
                      'Sandhi',
                      'Tamil',
                      'Telugu',
                      'Urdu'
                    ], },
        language3: {type:String,
          enum: [
            'Assamese',
            'Bengali',
            'Bodo',
            'Dogri',
            'English',
            'Gujarati',
            'Hindi',
            'Kannada',
            'Kashmiri',
            'Konkani',
            'Maithili',
            'Malayalam',
            'Marathi',
            'Meitei',
            'Nepali',
            'Odia',
            'Punjabi',
            'Sanskrit',
            'Santali',
            'Sandhi',
            'Tamil',
            'Telugu',
            'Urdu',
            ''
          ],},
      },
  
      professionalDetails: {
        type: { type: String, required: true }, // "Service" or "Business"
        serviceName: {type: String},
        serviceAddress:{type: String},
        serviceDesignation: String,
        serviceSalary: {type: Number},
        businessName: {type: String},
        businessAddress: {type: String},
        businessDesignation: {type: String},
        businessIncome: {type: Number},
      },
      educationDetails:{
        type:{type:String,required:true},
        tenthSchoolName:{type:String},
        tenthMarks:{type:Number},
        diplomaCollegeName:{type:String},
        diplomaCourseName:{type:String},
        diplomaMarks:{type:Number},
        twelfthCollegeName:{type:String},
        twelfthCourseName:{type:String},
        twelfthMarks:{type:Number},
        graduationCollegeName:{type:String},
        graduationCourseName:{type:String},
        graduationMarks:{type:Number},
        postGraduationCollegeName:{type:String},
        postGraduationCourseName:{type:String},
        postGraduationSpecialization:{type:String},
        postGraduationMarks:{type:Number},
        phdCollegeName:{type:String},
        phdCourseName:{type:String},
        phdSpecialization:{type:String},
        phdMarks:{type:Number}
      },
      fatherDetails: {
        firstName: { type: String, required: true },
        middleName: {type: String},
        lastName: { type: String, required: true },
        status: { type: String, required: true ,enum: ['alive', 'expired']}, // "alive" or "expired"
        contact: {type: Number}, 
        profession:{type:String,
                    enum:['Service','Business','Retired'],},
        aliveFields:{
                    contact: { type: String },
                    profession: { type: String, enum: ['Service', 'Business', 'Retired'] }
                  }
      },
      motherDetails: {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        status: { type: String, required: true,enum: ['alive', 'expired'] },
                 // "alive" or "expired"
        contact: {type: Number},
        profession: {type:String,
                    enum:['Service','Business','Retired','House Wife'],},
        aliveFields: {
                      contact: { type: String },
                      profession: { type: String, enum: ['Service', 'Business', 'Retired', 'House Wife'] }
                  }
      },
      maternalSurname: {
        surName: { type: String, required: true },
      },
    
      relativesSurname: {
        surName1:{type: String},
        surName2:{type: String},
        surName3:{type: String},
      },
    
      elderSiblings: [
        {
          firstName: { type: String},
          lastName: { type: String},
          maritalStatus: { type: String,
                          enum:['Single','Widow','Widower','Divorce',''] },
        }
      ],
      youngerSiblings: [
        {
          firstName: { type: String},
          lastName: { type: String},
          maritalStatus: { type: String,
                          enum:['Single','Widow','Widower','Divorce','']},
        }
      ],
    
      spousePreference: {
        complexion: {type: String,
                    enum:['Very Dark','Dark','Whitish','Fair','Very Fair']},
                    height:{type:Number},
        physique:{type: String,
                  enum:['Average','Athletic','Slim','Fit','Muscular','Curvy','Slightly Overweight']},
      },
    
      otherDetails: {
        aboutSelf:{type: String},
        foodPreference:{type: String,
                        enum:['Pure Veg','Mostly Veg','Veg & Non-veg','Mostly Non-veg','Pure Non-veg']},
      },
    
      contactInformation: {
        country: { type: String, required: true },
        state: { type: String, required: true },
        city: { type: String, required: true },
        villageTown: {type:String},
        pin: { type: Number, required: true },
      },

});

const FormRegistration = mongoose.model('FormRegistration', formRegistrationSchema);

module.exports = FormRegistration;