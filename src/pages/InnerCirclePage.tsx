import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { submitInnerCircleSurvey } from '../lib/supabase';

function InnerCirclePage() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    gender: '',
    genderSelfDescribe: '',
    age: '',
    ethnicity: '',
    city: '',
    state: '',
    hasInsurance: '',
    outOfPocketSpending: '',

    diagnosisStatus: '',
    diagnosisOther: '',
    migraineFrequency: '',
    migraineFrequencyOther: '',
    lastMigraineMonth: '',
    lastMigraineYear: '',
    experienceAuras: '',
    auraOther: '',
    migraineType: '',
    migraineTypeOther: '',
    migraineJourney: '',
    migraineJourneyOther: '',

    healthConditions: [] as string[],
    healthConditionsOther: '',

    hopes: '',
    additionalInfo: '',
  });

  const states = [
    'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA',
    'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD',
    'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ',
    'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC',
    'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
  ];

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const years = Array.from({ length: 11 }, (_, i) => new Date().getFullYear() - i);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await submitInnerCircleSurvey({
        name: formData.name,
        email: formData.email,
        gender: formData.gender === 'self-describe' ? 'self-describe' : formData.gender,
        gender_self_describe: formData.gender === 'self-describe' ? formData.genderSelfDescribe : null,
        age: formData.age,
        ethnicity: formData.ethnicity,
        city: formData.city,
        state: formData.state,
        income: `${formData.hasInsurance}|${formData.outOfPocketSpending}`,
        diagnosis_status: formData.diagnosisStatus === 'other' ? 'other' : formData.diagnosisStatus,
        diagnosis_other: formData.diagnosisStatus === 'other' ? formData.diagnosisOther : null,
        migraine_frequency: formData.migraineFrequency === 'other' ? 'other' : formData.migraineFrequency,
        migraine_frequency_other: formData.migraineFrequency === 'other' ? formData.migraineFrequencyOther : null,
        last_migraine_month: formData.lastMigraineMonth,
        last_migraine_year: formData.lastMigraineYear,
        experience_auras: formData.experienceAuras === 'other' ? 'other' : formData.experienceAuras,
        aura_other: formData.experienceAuras === 'other' ? formData.auraOther : null,
        migraine_type: formData.migraineType === 'other' ? 'other' : formData.migraineType,
        migraine_type_other: formData.migraineType === 'other' ? formData.migraineTypeOther : null,
        migraine_journey: formData.migraineJourney === 'other' ? 'other' : formData.migraineJourney,
        migraine_journey_other: formData.migraineJourney === 'other' ? formData.migraineJourneyOther : null,
        health_conditions: formData.healthConditions.length > 0 ? formData.healthConditions : null,
        health_conditions_other: formData.healthConditions.includes('other') ? formData.healthConditionsOther : null,
        hopes: formData.hopes || null,
        additional_info: formData.additionalInfo || null
      });

      setShowModal(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your form. Please try again.');
    }
  };

  const handleHealthConditionChange = (condition: string) => {
    setFormData(prev => {
      const conditions = prev.healthConditions.includes(condition)
        ? prev.healthConditions.filter(c => c !== condition)
        : [...prev.healthConditions, condition];
      return { ...prev, healthConditions: conditions };
    });
  };

  const handleModalClose = () => {
    setShowModal(false);
    navigate('/');
  };

  return (
    <div className="relative min-h-screen font-sans text-white">
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: 'url("https://res.cloudinary.com/dknulbme8/image/upload/e_improve:outdoor/sunflower_uqts2i")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      />

      <div className="relative z-10">
        <Navigation />

        <main className="flex flex-col items-center justify-center min-h-screen px-4 pb-24 pt-48">
          <div className="text-5xl md:text-7xl font-bold text-center leading-none mb-12">
            <div style={{ textShadow: '2px 2px 1px rgba(170, 170, 170, 0.2), -2px -2px 1px rgba(170, 170, 170, 0.2), 2px -2px 1px rgba(170, 170, 170, 0.2), -2px 2px 1px rgba(170, 170, 170, 0.2)' }}>INNER CIRCLE SURVEY</div>
          </div>

          <div className="flex justify-center w-full mt-24">
            <div className="w-[1050px] bg-black/60 backdrop-blur-sm p-12 rounded-lg">
              <div className="space-y-8 text-xl">
                <p>
                  Thank you for your interest in joining the Kōkūn Inner Circle! This short survey will help us get to know you better and ensure we're bringing together a diverse, representative group. Your voice and experiences are invaluable, and we're truly grateful you're considering being part of this journey.
                </p>

                <form onSubmit={handleSubmit} className="mt-12 space-y-12">
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-terracotta">(1) Tell us about yourself​. We'd love to get to know you a little better.</h2>
                    
                    <div>
                      <label htmlFor="name" className="block text-base font-medium mb-2">
                        Name*
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-terracotta focus:border-transparent"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-base font-medium mb-2">
                        Email*
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-terracotta focus:border-transparent"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>

                    <div>
                      <p className="block text-base font-medium mb-2">Gender*</p>
                      <div className="space-y-2 text-base">
                        {['Male', 'Female'].map(option => (
                          <label key={option} className="flex items-center space-x-2">
                            <input
                              type="radio"
                              name="gender"
                              value={option}
                              checked={formData.gender === option}
                              onChange={(e) => setFormData({...formData, gender: e.target.value})}
                              className="text-terracotta focus:ring-terracotta"
                            />
                            <span>{option}</span>
                          </label>
                        ))}
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="gender"
                            value="self-describe"
                            checked={formData.gender === 'self-describe'}
                            onChange={(e) => setFormData({...formData, gender: e.target.value})}
                            className="text-terracotta focus:ring-terracotta"
                          />
                          <span>Prefer to self-describe:</span>
                          {formData.gender === 'self-describe' && (
                            <input
                              type="text"
                              className="ml-2 px-4 py-1 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-terracotta focus:border-transparent"
                              value={formData.genderSelfDescribe}
                              onChange={(e) => setFormData({...formData, genderSelfDescribe: e.target.value})}
                            />
                          )}
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="gender"
                            value="prefer-not"
                            checked={formData.gender === 'prefer-not'}
                            onChange={(e) => setFormData({...formData, gender: e.target.value})}
                            className="text-terracotta focus:ring-terracotta"
                          />
                          <span>Prefer not to answer</span>
                        </label>
                      </div>
                    </div>

                    <div>
                      <p className="block text-base font-medium mb-2">Age*</p>
                      <div className="space-y-2 text-base">
                        {['18-24', '25-34', '35-44', '45-54', '55-64', '65+'].map(option => (
                          <label key={option} className="flex items-center space-x-2">
                            <input
                              type="radio"
                              name="age"
                              value={option}
                              checked={formData.age === option}
                              onChange={(e) => setFormData({...formData, age: e.target.value})}
                              className="text-terracotta focus:ring-terracotta"
                            />
                            <span>{option}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="ethnicity" className="block text-base font-medium mb-2">
                        What race/ethnicity best describes you?*
                      </label>
                      <input
                        type="text"
                        id="ethnicity"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-terracotta focus:border-transparent"
                        value={formData.ethnicity}
                        onChange={(e) => setFormData({...formData, ethnicity: e.target.value})}
                      />
                    </div>

                    <div className="flex space-x-4">
                      <div className="flex-1">
                        <label htmlFor="city" className="block text-base font-medium mb-2">
                          City*
                        </label>
                        <input
                          type="text"
                          id="city"
                          required
                          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-terracotta focus:border-transparent"
                          value={formData.city}
                          onChange={(e) => setFormData({...formData, city: e.target.value})}
                        />
                      </div>
                      <div className="w-48">
                        <label htmlFor="state" className="block text-base font-medium mb-2">
                          State*
                        </label>
                        <select
                          id="state"
                          required
                          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-terracotta focus:border-transparent text-base"
                          value={formData.state}
                          onChange={(e) => setFormData({...formData, state: e.target.value})}
                        >
                          <option value="">Select...</option>
                          {states.map(state => (
                            <option key={state} value={state}>{state}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="hasInsurance" className="block text-base font-medium mb-2">
                        Do you have health insurance?*
                      </label>
                      <select
                        id="hasInsurance"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-terracotta focus:border-transparent text-base"
                        value={formData.hasInsurance}
                        onChange={(e) => setFormData({...formData, hasInsurance: e.target.value})}
                      >
                        <option value="">Select...</option>
                        <option value="employer">Employer-sponsored</option>
                        <option value="medical">MediCal</option>
                        <option value="medicaid">Medicaid</option>
                        <option value="self">Self-insured</option>
                        <option value="none">None</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="outOfPocketSpending" className="block text-base font-medium mb-2">
                        Do you spend out-of-pocket for migraine care (beyond copay and deductible)?*
                      </label>
                      <select
                        id="outOfPocketSpending"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-terracotta focus:border-transparent text-base"
                        value={formData.outOfPocketSpending}
                        onChange={(e) => setFormData({...formData, outOfPocketSpending: e.target.value})}
                      >
                        <option value="">Select...</option>
                        <option value="not-possible">No, it's not financially possible for me</option>
                        <option value="choose-not">I could, but I choose not to</option>
                        <option value="little">I spend a little out-of-pocket when needed</option>
                        <option value="lot">I spend a lot out-of-pocket to support my care</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-terracotta">(2) We all experience migraine differently. Could you tell us a little bit about how you experience migraine​?</h2>

                    <div>
                      <p className="block text-base font-medium mb-2">What is your diagnosis status?*</p>
                      <div className="space-y-2 text-base">
                        {[
                          'Diagnosed by doctor',
                          'Self-diagnosed',
                          'Undiagnosed'
                        ].map(option => (
                          <label key={option} className="flex items-center space-x-2">
                            <input
                              type="radio"
                              name="diagnosisStatus"
                              value={option}
                              checked={formData.diagnosisStatus === option}
                              onChange={(e) => setFormData({...formData, diagnosisStatus: e.target.value})}
                              className="text-terracotta focus:ring-terracotta"
                            />
                            <span>{option}</span>
                          </label>
                        ))}
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="diagnosisStatus"
                            value="other"
                            checked={formData.diagnosisStatus === 'other'}
                            onChange={(e) => setFormData({...formData, diagnosisStatus: e.target.value})}
                            className="text-terracotta focus:ring-terracotta"
                          />
                          <span>Other:</span>
                          {formData.diagnosisStatus === 'other' && (
                            <input
                              type="text"
                              className="ml-2 px-4 py-1 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-terracotta focus:border-transparent"
                              value={formData.diagnosisOther}
                              onChange={(e) => setFormData({...formData, diagnosisOther: e.target.value})}
                            />
                          )}
                        </label>
                      </div>
                    </div>

                    <div>
                      <p className="block text-base font-medium mb-2">How would you describe your migraine based on frequency?*</p>
                      <div className="space-y-2 text-base">
                        {[
                          'Episodic migraine (less than 15 headache days per month)',
                          'Chronic migraine (15 or more headache days per month)',
                          'Infrequent symptomatic migraine (trigger-specific)',
                          'I don\'t get them anymore'
                        ].map(option => (
                          <label key={option} className="flex items-center space-x-2">
                            <input
                              type="radio"
                              name="migraineFrequency"
                              value={option}
                              checked={formData.migraineFrequency === option}
                              onChange={(e) => setFormData({...formData, migraineFrequency: e.target.value})}
                              className="text-terracotta focus:ring-terracotta"
                            />
                            <span>{option}</span>
                          </label>
                        ))}
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="migraineFrequency"
                            value="other"
                            checked={formData.migraineFrequency === 'other'}
                            onChange={(e) => setFormData({...formData, migraineFrequency: e.target.value})}
                            className="text-terracotta focus:ring-terracotta"
                          />
                          <span>Other:</span>
                          {formData.migraineFrequency === 'other' && (
                            <input
                              type="text"
                              className="ml-2 px-4 py-1 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-terracotta focus:border-transparent"
                              value={formData.migraineFrequencyOther}
                              onChange={(e) => setFormData({...formData, migraineFrequencyOther: e.target.value})}
                            />
                          )}
                        </label>
                      </div>
                    </div>

                    <div className="flex space-x-4">
                      <div className="flex-1">
                        <p className="block text-base font-medium mb-2">
                          When did you last experience a migraine?
                        </p>
                        <p className="block text-base font-medium mb-2">
                          Month*
                        </p>
                        <select
                          id="lastMigraineMonth"
                          required
                          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-terracotta focus:border-transparent text-base"
                          value={formData.lastMigraineMonth}
                          onChange={(e) => setFormData({...formData, lastMigraineMonth: e.target.value})}
                        >
                          <option value="">Select month...</option>
                          {months.map(month => (
                            <option key={month} value={month}>{month}</option>
                          ))}
                        </select>
                      </div>
                      <div className="flex-1">
                        <p className="block text-base font-medium mb-2 invisible">
                          When did you last experience a migraine?
                        </p>
                        <p className="block text-base font-medium mb-2">
                          Year*
                        </p>
                        <select
                          id="lastMigraineYear"
                          required
                          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-terracotta focus:border-transparent text-base"
                          value={formData.lastMigraineYear}
                          onChange={(e) => setFormData({...formData, lastMigraineYear: e.target.value})}
                        >
                          <option value="">Select year...</option>
                          {years.map(year => (
                            <option key={year} value={year}>{year}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <p className="block text-base font-medium mb-2">Do you experience auras?*</p>
                      <div className="space-y-2 text-base">
                        {[
                          'Yes',
                          'No',
                          'I don\'t know what an aura is'
                        ].map(option => (
                          <label key={option} className="flex items-center space-x-2">
                            <input
                              type="radio"
                              name="experienceAuras"
                              value={option}
                              checked={formData.experienceAuras === option}
                              onChange={(e) => setFormData({...formData, experienceAuras: e.target.value})}
                              className="text-terracotta focus:ring-terracotta"
                            />
                            <span>{option}</span>
                          </label>
                        ))}
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="experienceAuras"
                            value="other"
                            checked={formData.experienceAuras === 'other'}
                            onChange={(e) => setFormData({...formData, experienceAuras: e.target.value})}
                            className="text-terracotta focus:ring-terracotta"
                          />
                          <span>Other:</span>
                          {formData.experienceAuras === 'other' && (
                            <input
                              type="text"
                              className="ml-2 px-4 py-1 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-terracotta focus:border-transparent"
                              value={formData.auraOther}
                              onChange={(e) => setFormData({...formData, auraOther: e.target.value})}
                            />
                          )}
                        </label>
                      </div>
                    </div>

                    <div>
                      <p className="block text-base font-medium mb-2">Which type of migraine do you experience?*</p>
                      <div className="space-y-2 text-base">
                        {[
                          'Classic migraine',
                          'Vestibular migraine',
                          'Hemiplegic migraine',
                          'Menstrual migraine',
                          'Abdominal migraine',
                          'Migraine without headache (Silent migraine)',
                          'Retinal (Ocular) migraine',
                          'Not sure/undiagnosed'
                        ].map(option => (
                          
                          <label key={option} className="flex items-center space-x-2">
                            <input
                              type="radio"
                              name="migraineType"
                              value={option}
                              checked={formData.migraineType === option}
                              onChange={(e) => setFormData({...formData, migraineType: e.target.value})}
                              className="text-terracotta focus:ring-terracotta"
                            />
                            <span>{option}</span>
                          </label>
                        ))}
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="migraineType"
                            value="other"
                            checked={formData.migraineType === 'other'}
                            onChange={(e) => setFormData({...formData, migraineType: e.target.value})}
                            className="text-terracotta focus:ring-terracotta"
                          />
                          <span>Other:</span>
                          {formData.migraineType === 'other' && (
                            <input
                              type="text"
                              className="ml-2 px-4 py-1 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-terracotta focus:border-transparent"
                              value={formData.migraineTypeOther}
                              onChange={(e) => setFormData({...formData, migraineTypeOther: e.target.value})}
                            />
                          )}
                        </label>
                      </div>
                    </div>

                    <div>
                      <p className="block text-base font-medium mb-2">How would you describe your current migraine journey?*</p>
                      <div className="space-y-2 text-base">
                        {[
                          'I\'m just beginning to seek answers',
                          'I\'ve been managing it for a while, but it\'s still a challenge',
                          'I have a plan that\'s working for me'
                        ].map(option => (
                          <label key={option} className="flex items-center space-x-2">
                            <input
                              type="radio"
                              name="migraineJourney"
                              value={option}
                              checked={formData.migraineJourney === option}
                              onChange={(e) => setFormData({...formData, migraineJourney: e.target.value})}
                              className="text-terracotta focus:ring-terracotta"
                            />
                            <span>{option}</span>
                          </label>
                        ))}
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="migraineJourney"
                            value="other"
                            checked={formData.migraineJourney === 'other'}
                            onChange={(e) => setFormData({...formData, migraineJourney: e.target.value})}
                            className="text-terracotta focus:ring-terracotta"
                          />
                          <span>Other:</span>
                          {formData.migraineJourney === 'other' && (
                            <input
                              type="text"
                              className="ml-2 px-4 py-1 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-terracotta focus:border-transparent"
                              value={formData.migraineJourneyOther}
                              onChange={(e) => setFormData({...formData, migraineJourneyOther: e.target.value})}
                            />
                          )}
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-terracotta">(3) Our health conditions are often interconnected. Could you tell us if you experience any other health conditions?</h2>
                    
                    <div className="space-y-2 text-base">
                      {[
                        'Anxiety',
                        'Depression',
                        'Endometriosis',
                        'Fibromyalgia',
                        'Gastrointestinal disorders',
                        'PCOS',
                        'Autoimmune conditions',
                        'Ehlers-Danlos Syndrome',
                        'Obesity',
                        'Epilepsy',
                        'Chronic Sinusitis',
                        'Heart Condition',
                        'Sleep Conditions',
                        'Long COVID',
                        'Not sure',
                        'None'
                      ].map(condition => (
                        <label key={condition} className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            checked={formData.healthConditions.includes(condition)}
                            onChange={() => handleHealthConditionChange(condition)}
                            className="text-terracotta focus:ring-terracotta"
                          />
                          <span>{condition}</span>
                        </label>
                      ))}
                      <div className="flex items-center space-x-2">
                        <label className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            checked={formData.healthConditions.includes('other')}
                            onChange={() => handleHealthConditionChange('other')}
                            className="text-terracotta focus:ring-terracotta"
                          />
                          <span>Other:</span>
                        </label>
                        {formData.healthConditions.includes('other') && (
                          <input
                            type="text"
                            className="ml-2 px-4 py-1 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-terracotta focus:border-transparent"
                            value={formData.healthConditionsOther}
                            onChange={(e) => setFormData({...formData, healthConditionsOther: e.target.value})}
                          />
                        )}
                      
                      </div>
                    
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-terracotta">(4) What do you hope to get by being a part of the Kōkūn Inner Circle?</h2>
                    <div>
                      
                      <textarea
                        id="hopes"
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-terracotta focus:border-transparent"
                        value={formData.hopes}
                        onChange={(e) => setFormData({...formData, hopes: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-terracotta">(5) Is there anything else you'd like to share?</h2>
                    <div>
                      <textarea
                        id="additionalInfo"
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-terracotta focus:border-transparent"
                        value={formData.additionalInfo}
                        onChange={(e) => setFormData({...formData, additionalInfo: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="text-center pt-8">
                    <button
                      type="submit"
                      className="bg-terracotta text-white px-12 py-4 rounded-full text-xl font-semibold hover:bg-terracotta-light transition-colors"
                    >
                      Submit Survey
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-black/70" onClick={handleModalClose} />
          <div className="relative bg-white text-black p-8 rounded-lg max-w-md w-full">
            <h3 className="text-2xl font-bold mb-4">Thank you for your interest!</h3>
            <p className="mb-6">
              We appreciate you taking the time to complete our survey. We'll be in touch soon with next steps.
            </p>
            <button
              onClick={handleModalClose}
              className="w-full bg-terracotta text-white px-6 py-2 rounded-full font-semibold hover:bg-terracotta-light transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default InnerCirclePage;