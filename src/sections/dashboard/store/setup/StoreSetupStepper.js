import { useState } from 'react';
// @mui
import { alpha } from '@mui/material/styles';
import { Box, Step, Paper, Button, Stepper, StepLabel, Typography } from '@mui/material';
import StoreSetupCompanyInfoForm from './StoreSetupCompanyInfoForm';

import * as Yup from 'yup';
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import StoreSetupActionsContainer from './StoreSetupActionsContainer';
import FormProvider from '../../../../components/hook-form';
import { useSelector } from '../../../../redux/store';
import axiosInstance from '../../../../utils/axios';
import { getAuthTokenHeader } from '../../../../auth/utils';
import { updateStore } from '../../../../redux/slices/store';
import StoreSetupCreateStoreForm from './StoreSetupCreateStoreForm';
import { useAuthContext } from '../../../../auth/useAuthContext';
import { getFormDataFromObject } from '../../../../utils/formData';
import { MAX_IMAGE, MAX_IMAGE_SIZE } from '../../../../../constants/fileSizes';
import { regexAlphaSpaceHyphen } from '../../../../utils/regex';

export default function HorizontalLinearStepper({ storeValues }) {
  const { store, isLoading, store_status } = useSelector((state) => state.store);
  const { user } = useAuthContext();
  const isExistingStore = !!store?.registration_step;
  const [activeStep, setActiveStep] = useState(isExistingStore ? parseInt(store.registration_step) : 0);
  const [formSubmitLoading, setFormSubmitLoading] = useState(false);

  // console.log(store);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => {
      const newStep = prevActiveStep + 1;
      // setValue('activeStep', newStep);
      return newStep;
    });
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const steps = ['Company Info', 'Create Store', 'Your Application', 'Connect Stripe'];

  const FORM_STEPS = [
    {
      TITLE: 'Company Info',
      FORM: <StoreSetupCompanyInfoForm />,
      API_CALL: async (data) => {
        const { company_name, company_address, company_number } = data;
        const endpoint = isExistingStore ? '/store/setup/step-1/update' : '/store/setup/step-1/new';
        const response = await axiosInstance.post(
          endpoint,
          { company_name, company_address, company_number },
          { headers: getAuthTokenHeader() }
        );
        updateStore(response.data);
      },
    },
    {
      TITLE: 'Create Store',
      FORM: <StoreSetupCreateStoreForm />,
      API_CALL: async (data) => {
        const { store_name, store_url, profile_image, cover_photo, bio, email, contact_number } = data;
        console.log({
          profile_image,
          cover_photo,
        });
        const formData = getFormDataFromObject({
          store_name,
          store_url,
          profile_image,
          cover_photo,
          bio,
          email,
          contact_number,
        });
        await axiosInstance.post('/store/setup/step-2', formData, {
          headers: { 'Content-Type': 'multipart/form-data', ...getAuthTokenHeader() },
        });
      },
    },
    {
      TITLE: 'Your Application',
      FORM: (
        <StoreSetupCompanyInfoForm
          steps={steps}
          activeStep={activeStep}
          handleBack={handleBack}
          handleNext={handleNext}
        />
      ),
    },
    {
      TITLE: 'Connect Stripe',
      FORM: (
        <StoreSetupCompanyInfoForm
          steps={steps}
          activeStep={activeStep}
          handleBack={handleBack}
          handleNext={handleNext}
        />
      ),
    },
  ];

  const StoreSetupSchema = Yup.object().shape({
    // company info
    company_name: Yup.string().when('activeStep', {
      is: 0,
      then: Yup.string().required('Required'),
      otherwise: Yup.string(),
    }),
    company_address: Yup.object().when('activeStep', {
      is: 0,
      then: Yup.object({
        address_line_1: Yup.string().required('Required'),
        postcode: Yup.string().required('Required'),
        city: Yup.string().required('Required'),
        country: Yup.string().required('Required'),
      }),
    }),

    // create store
    store_name: Yup.string().when('activeStep', {
      is: 1,
      then: Yup.string().required('Required'),
      otherwise: Yup.string(),
    }),
    store_url: Yup.string().when('activeStep', {
      is: 1,
      then: Yup.string().test(
        'store url test',
        'Required, must only container letters, hyphens or spaces (which will automatically convert to hyphens)',
        (value) => regexAlphaSpaceHyphen.test(value)
      ),
      otherwise: Yup.string(),
    }),
    profile_image: Yup.mixed().when('activeStep', {
      is: 1,
      then: Yup.mixed()
        .required('Profile Image is required!')
        .test(
          'fileSize',
          `Your file is too big, must be ${MAX_IMAGE.text} or less`,
          (value) => value && value.size <= MAX_IMAGE.size
        ),
      otherwise: Yup.mixed(),
    }),
    cover_photo: Yup.mixed().when('activeStep', {
      is: 1,
      then: Yup.mixed()
        .required('Cover Photo is required!')
        .test(
          'size',
          `Your file is too big, must be ${MAX_IMAGE.text} or less`,
          (value) => value && value.size <= MAX_IMAGE.size
        ),
      otherwise: Yup.mixed(),
    }),

    bio: Yup.string().when('activeStep', {
      is: 1,
      then: Yup.string().min(140, 'Minimum 140 characters').max(500, 'Maximum 500 characters'),
      otherwise: Yup.string(),
    }),
    email: Yup.string().when('activeStep', {
      is: 1,
      then: Yup.string().required('Required'),
      otherwise: Yup.string(),
    }),
    contact_number: Yup.string().when('activeStep', {
      is: 1,
      then: Yup.string().required('Required'),
      otherwise: Yup.string(),
    }),
  });

  const defaultValues = {
    activeStep: activeStep,
    // company info
    company_name: store?.company_info?.company_name || '',
    company_number: store?.company_info?.company_number || '',
    company_address: {
      address_line_1: store?.company_info?.company_address?.address_line_1 || '',
      address_line_2: store?.company_info?.company_address?.address_line_2 || '',
      postcode: store?.company_info?.company_address?.postcode || '',
      city: store?.company_info?.company_address?.city || '',
      country: store?.company_info?.company_address?.country || 'United Kingdom',
    },
    // create store
    store_name: '',
    store_name_available: false,
    store_url: '',
    store_url_available: false,
    profile_image: null,
    cover_photo: null,
    bio: '',
    email: '',
    contact_number: '',
  };

  const methods = useForm({
    resolver: yupResolver(StoreSetupSchema),
    defaultValues,
  });

  const {
    reset,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    getValues,
    setValue,
  } = methods;

  const onSubmit = async (data) => {
    try {
      // make dynamic api call
      console.log(data);
      setFormSubmitLoading(true);
      await FORM_STEPS[activeStep].API_CALL(data);
      if (activeStep !== 1) handleNext();
    } catch (error) {
      console.error(error);
      // reset();
      setError('afterSubmit', {
        ...error,
        message: error.message,
      });
    }
    setFormSubmitLoading(false);
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length ? (
        <>
          <Paper
            sx={{
              p: 3,
              my: 3,
              minHeight: 120,
              bgcolor: (theme) => alpha(theme.palette.grey[200], 0.12),
            }}
          >
            <Typography sx={{ my: 1 }}>All steps completed - you're finished!!</Typography>
          </Paper>

          <Box sx={{ display: 'flex' }}>
            <Box sx={{ flexGrow: 1 }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </>
      ) : (
        FORM_STEPS[activeStep].FORM
      )}
      <StoreSetupActionsContainer
        activeStep={activeStep}
        steps={steps}
        handleBack={handleBack}
        handleNext={handleNext}
        formSubmitLoading={formSubmitLoading}
      />
      <Button onClick={() => console.log(getValues())}>get values</Button>
    </FormProvider>
  );
}
