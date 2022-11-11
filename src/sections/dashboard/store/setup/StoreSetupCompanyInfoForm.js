import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import { FormSectionStack, SetupFormWrapperStyled } from './styles';
import { Alert, Autocomplete, Box, TextField } from '@mui/material';

import { useFormContext } from 'react-hook-form';
import { RHFTextField } from '../../../../components/hook-form';
import Subheader from '../../../../components/subheader/Subheader';
import { countries, countryToFlag } from '../../../../assets/data';

const StoreSetupBusinessInfoForm = () => {
  const { errors, setValue } = useFormContext();

  const updateCountry = (val) => {
    setValue('company_address.country', val);
  };

  return (
    <>
      <SetupFormWrapperStyled>
        <Subheader sx={{ padding: 0, marginBottom: 16 }} text={'Company Information'} />
        <FormSectionStack>
          <RHFTextField name="company_name" label="Registered company name" />
          <RHFTextField name="company_number" label="Company number (Optional)" />
        </FormSectionStack>
        <Subheader sx={{ padding: 0, marginBottom: 16 }} text={'Company office address'} />
        <FormSectionStack matchGapMB>
          <RHFTextField name="company_address.address_line_1" label="Address line 1" />
          <RHFTextField name="company_address.address_line_2" label="Address line 2 (Optional)" />
        </FormSectionStack>
        <FormSectionStack matchGapMB>
          <RHFTextField name="company_address.postcode" label="Post / Zip code" />
          <RHFTextField name="company_address.city" label="City" />
        </FormSectionStack>
        <FormSectionStack sx={{ marginBottom: 0 }} singleItem>
          <Autocomplete
            // id={'countries'}
            // name="company_office_address.country"
            // onChange={(e) => updateCountry(e.target.children[1].value)}
            defaultValue={countries.find((c) => c.label === 'United Kingdom')}
            fullWidth
            autoHighlight
            options={countries}
            getOptionLabel={(option) => option.label}
            renderOption={(props, option) => (
              <Box component="li" value={option.label} {...props} sx={{ px: '8px !important' }}>
                <Box component="span" sx={{ flexShrink: 0, mr: 2, fontSize: 22 }}>
                  {countryToFlag(option.code)}
                </Box>
                {option.label} ({option.code}) +{option.phone}
                <input value={option.label} style={{ display: 'none' }} />
              </Box>
            )}
            renderInput={(params) => (
              <TextField
                label={'Country'}
                {...params}
                inputProps={{
                  ...params.inputProps,
                }}
                onBlur={(e) => updateCountry(e.target.value)}
                onChange={(e) => updateCountry(e.target.value)}
              />
            )}
          />
        </FormSectionStack>
        {!!errors?.afterSubmit && <Alert severity="error">{errors.afterSubmit.message}</Alert>}
      </SetupFormWrapperStyled>
    </>
  );
};

StoreSetupBusinessInfoForm.propTypes = {};

export default React.memo(StoreSetupBusinessInfoForm);
