import { FormInstance, notification } from "antd";
import { IAPIError, IFieldErrors } from "../types/apiResponse.types";
import { AxiosError } from "axios";
import { HttpStatusCode } from "../constant";
import { RESPONSE_ERROR } from "../message";

const showErrorMessages = (messages?: string[]) => {
  messages?.forEach((message) => {
    notification.error({
      message,
    });
  });
};

const setFormFieldErrors = (form: FormInstance, fieldErrors: IFieldErrors) => {
  const fields = Object.entries(fieldErrors).map(([field, errors]) => ({
    name: field,
    errors,
  }));
  form.setFields(fields);
};

export const handleAPIError = (e: AxiosError) => {
  if (e.response == null) {
    notification.error({ message: RESPONSE_ERROR });
    return;
  }

  const { errors } = e.response.data as IAPIError;
  showErrorMessages(errors);
};

export const handleFormError = (form: FormInstance, err: AxiosError) => {
  if (err.response == null) {
    notification.error({ message: RESPONSE_ERROR });
    return;
  }

  const { errors, field_errors: fieldErrors } = err.response.data as IAPIError;
  showErrorMessages(errors);

  if (err.response.status === HttpStatusCode.BAD_REQUEST && fieldErrors) {
    setFormFieldErrors(form, fieldErrors);
  }
};
