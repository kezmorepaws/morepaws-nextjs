import React, { useCallback, useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import NextLink from 'next/link';

import {
  FormSectionStack,
  InputWithInfoInfoContainer,
  InputWithInfoInputContainer,
  InputWithInfoStack,
  SetupFormWrapperStyled,
  StoreNameAndUrlWrapper,
  StoreUrlContainer,
} from './styles';
import { Alert, AlertTitle, Box } from '@mui/material';

import { useFormContext } from 'react-hook-form';
import { RHFTextField } from '../../../../components/hook-form';
import Subheader from '../../../../components/subheader/Subheader';
import { Typography } from '@mui/material';
import { Button } from '@mui/material';
import { useAuthContext } from '../../../../auth/useAuthContext';
import useCustomMediaQueries from '../../../../hooks/useCustomMediaQueries';
import { RHFUpload, RHFUploadAvatar, RHFUploadBox } from '../../../../components/hook-form/RHFUpload';
import AvailabilityIndicator from '../../../../components/availability-indicator/AvailabilityIndicator';
import { getAuthTokenHeader } from '../../../../auth/utils';
import axiosInstance from '../../../../utils/axios';
import useDebounce from '../../../../hooks/useDebounce';
import { regexAlphaSpaceHyphen } from '../../../../utils/regex';

const StoreSetupCreateStoreForm = () => {
  const { errors, setValue, watch } = useFormContext();
  const { user } = useAuthContext();
  const storeName = watch('store_name');
  const storeNameAvailable = watch('store_name_available');
  const storeUrl = watch('store_url');
  const storeUrlAvailable = watch('store_url_available');
  const [urlAvailabilityLoading, setUrlAvailabilityLoading] = useState(true);
  const [nameAvailabilityLoading, setNameAvailabilityLoading] = useState(true);

  const handleSetUserEmail = () => {
    setValue('email', user.email);
  };

  const alertButtonSx = useMemo(
    () => ({
      marginTop: !isMobile ? 1 : 0,
      marginLeft: isMobile ? 1 : 0,
    }),
    [isMobile]
  );

  const { isTablet, isMobile } = useCustomMediaQueries();

  const debouncedNameSearchTerm = useDebounce(storeName, 500);

  const checkNameAvailability = useCallback(async () => {
    try {
      const res = await axiosInstance.post(
        '/store/setup/check-store-name',
        { store_name: debouncedNameSearchTerm },
        { headers: getAuthTokenHeader() }
      );
      setValue('store_name_available', true);
    } catch (error) {
      setValue('store_name_available', false);
    }
    setNameAvailabilityLoading(false);
  }, [debouncedNameSearchTerm, setValue]);

  useEffect(() => {
    if (!storeName) {
      setValue('store_url_availability', false);
    }
    if (storeName && storeName !== debouncedNameSearchTerm) {
      setNameAvailabilityLoading(true);
    }
  }, [storeName]);

  useEffect(() => {
    if (debouncedNameSearchTerm) {
      setNameAvailabilityLoading(true);
      checkNameAvailability();
    }
  }, [debouncedNameSearchTerm]);

  const debouncedURLSearchTerm = useDebounce(storeUrl, 500);

  const checkURLAvailability = async () => {
    try {
      const res = await axiosInstance.post(
        '/store/setup/check-store-url',
        { store_url: debouncedURLSearchTerm },
        { headers: getAuthTokenHeader() }
      );
      setValue('store_url_available', true);
    } catch (error) {
      setValue('store_url_available', false);
    }
    setUrlAvailabilityLoading(false);
  };

  useEffect(() => {
    if (!storeUrl || !regexAlphaSpaceHyphen.test(storeUrl)) {
      setValue('store_url_availability', false);
    }
    if (storeUrl && storeUrl !== debouncedURLSearchTerm && regexAlphaSpaceHyphen.test(storeUrl)) {
      setUrlAvailabilityLoading(true);
    }
  }, [storeUrl]);

  useEffect(() => {
    if (debouncedURLSearchTerm && regexAlphaSpaceHyphen.test(debouncedURLSearchTerm)) {
      checkURLAvailability();
    }
  }, [debouncedURLSearchTerm]);

  return (
    <>
      <SetupFormWrapperStyled>
        <Subheader sx={{ padding: 0, marginBottom: 16 }} text={'Choose a unique name for your store'} />
        <FormSectionStack sx={isMobile ? { flexDirection: 'column' } : {}} fullWidthMobile>
          <RHFTextField sx={{ flex: 1 }} name="store_name" label="Give your store a unique name" />
          <Box flex={isTablet ? 0.7 : 1} display={'flex'}>
            {storeName && (
              <AvailabilityIndicator
                success={storeNameAvailable}
                resultName={'name'}
                isLoading={nameAvailabilityLoading}
              />
            )}
          </Box>
        </FormSectionStack>
        <Subheader sx={{ padding: 0, marginBottom: 16 }} text={'Choose a unique URL for your store'} />

        <FormSectionStack sx={isMobile ? { flexDirection: 'column' } : {}}>
          <StoreUrlContainer>
            <Typography
              sx={{ marginRight: 1, fontSize: isTablet ? 16 : 22, marginBottom: -0.5 }}
              color={'primary'}
              variant="body1"
            >
              mylocaldeli.com/
            </Typography>
            <RHFTextField name="store_url" label="Unique URL for your store" />
          </StoreUrlContainer>
          <Box flex={isTablet ? 0.7 : 1} display={'flex'}>
            {storeUrl && regexAlphaSpaceHyphen.test(storeUrl) && (
              <AvailabilityIndicator
                success={storeUrlAvailable}
                resultName={'URL'}
                isLoading={urlAvailabilityLoading}
              />
            )}
          </Box>
        </FormSectionStack>
        <FormSectionStack>
          <Alert severity={'success'}>
            <AlertTitle>Why do we need this?</AlertTitle>
            For customers to be able to reach your store using a unique URL.
          </Alert>
        </FormSectionStack>

        <Subheader sx={{ padding: 0, marginBottom: 16 }} text={'Upload your store profile image'} />
        <FormSectionStack>
          <RHFUploadAvatar name="profile_image" label="" />
        </FormSectionStack>
        <Subheader sx={{ padding: 0, marginBottom: 16 }} text={'Upload your store cover photo'} />
        <FormSectionStack>
          <RHFUpload name="cover_photo" label="" />
        </FormSectionStack>
        <Subheader
          sx={{ padding: 0, marginBottom: 16 }}
          text={'Add a bio for customers to read (Max 500 characters)'}
        />
        <FormSectionStack>
          <RHFTextField multiline rows={4} name="bio" label="Store biography" />
        </FormSectionStack>

        <Subheader sx={{ padding: 0, marginBottom: 16 }} text={'Add your store email address'} />
        <InputWithInfoStack>
          <InputWithInfoInputContainer>
            <RHFTextField name="email" label="Email address" />
          </InputWithInfoInputContainer>
          <InputWithInfoInfoContainer>
            <Alert severity={'success'}>
              <AlertTitle>Why do we need this?</AlertTitle>
              For managing your orders, receiving updates and communicating with your customers. Enter a dedicated
              business Email Address or
              <Box>
                <Button sx={alertButtonSx} onClick={handleSetUserEmail} variant="soft" color={'success'}>
                  Use your profile email address
                </Button>
              </Box>
            </Alert>
          </InputWithInfoInfoContainer>
        </InputWithInfoStack>
        <Subheader sx={{ padding: 0, marginBottom: 16 }} text={'Add your store contact number'} />
        <InputWithInfoStack>
          <InputWithInfoInputContainer>
            <RHFTextField name="contact_number" label="Contact number" />
          </InputWithInfoInputContainer>
          <InputWithInfoInfoContainer>
            <Alert severity={'success'}>
              <AlertTitle>Why do we need this?</AlertTitle>
              For paying customers to contact you about their orders.{' '}
              <NextLink href={'/'}>
                <Button sx={alertButtonSx} onClick={handleSetUserEmail} variant="soft" color={'success'}>
                  Read more about our privacy policy
                </Button>
              </NextLink>
            </Alert>
          </InputWithInfoInfoContainer>
        </InputWithInfoStack>

        {!!errors?.afterSubmit && <Alert severity="error">{errors.afterSubmit.message}</Alert>}
      </SetupFormWrapperStyled>
    </>
  );
};

StoreSetupCreateStoreForm.propTypes = {};

export default React.memo(StoreSetupCreateStoreForm);
