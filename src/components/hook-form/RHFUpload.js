import PropTypes from 'prop-types';
// form
import { useFormContext, Controller } from 'react-hook-form';
// @mui
import { FormHelperText } from '@mui/material';
//
import { UploadAvatar, Upload, UploadBox } from '../upload';
import { getBase64 } from '../../utils/convertToBase64';

// ----------------------------------------------------------------------

RHFUploadAvatar.propTypes = {
  name: PropTypes.string,
};

export function RHFUploadAvatar({ name, ...other }) {
  const { control, setValue } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        const isError = !!error;

        return (
          <div>
            <UploadAvatar
              accept={{
                'image/*': [],
              }}
              error={isError}
              file={field.value}
              {...other}
              onRHFChange={(e) => {
                e.forEach(async (f) => {
                  try {
                    // const { type, size } = f;
                    // const file = {
                    //   name: f.name,
                    //   type,
                    //   size,
                    // };
                    // const base64 = await getBase64(f);
                    // file.file_src = base64;
                    const preview = Object.assign(f, {
                      preview: URL.createObjectURL(f),
                    });
                    setValue(name, f);
                  } catch (error) {
                    console.error(error);
                  }
                });
              }}
            />

            {isError && (
              <FormHelperText error sx={{ px: 2, textAlign: 'center' }}>
                {error.message}
              </FormHelperText>
            )}
          </div>
        );
      }}
    />
  );
}

// ----------------------------------------------------------------------

RHFUploadBox.propTypes = {
  name: PropTypes.string,
};

export function RHFUploadBox({ name, ...other }) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        const isError = !!error && !field.value?.length;

        return <UploadBox error={isError} files={field.value} {...other} />;
      }}
    />
  );
}

// ----------------------------------------------------------------------

RHFUpload.propTypes = {
  name: PropTypes.string,
  multiple: PropTypes.bool,
};

export function RHFUpload({ name, multiple, ...other }) {
  const { control, setValue } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        const isErrorWithSingle = !!error;

        const isErrorWithMultiple = !!error && !field.value?.length;

        return multiple ? (
          <Upload
            multiple
            accept={{ 'image/*': [] }}
            files={field.value}
            error={isErrorWithMultiple}
            helperText={
              isErrorWithMultiple && (
                <FormHelperText error sx={{ px: 2 }}>
                  {error?.message}
                </FormHelperText>
              )
            }
            {...other}
          />
        ) : (
          <Upload
            accept={{ 'image/*': [] }}
            file={field.value}
            error={isErrorWithSingle}
            helperText={
              isErrorWithSingle && (
                <FormHelperText error sx={{ px: 2 }}>
                  {error?.message}
                </FormHelperText>
              )
            }
            {...other}
            onRHFChange={(e) => {
              e.forEach(async (f) => {
                try {
                  // const { type, size } = f;
                  // const file = {
                  //   name: f.name,
                  //   type,
                  //   size,
                  // };
                  // const base64 = await getBase64(f);
                  // file.file_src = base64;
                  const preview = Object.assign(f, {
                    preview: URL.createObjectURL(f),
                  });
                  setValue(name, f);
                } catch (error) {
                  console.error(error);
                }
              });
            }}
          />
        );
      }}
    />
  );
}
