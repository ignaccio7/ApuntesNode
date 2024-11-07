import { validationResult } from "express-validator";
import errorCodesUtils from "../utils/errorCodes.utils";

const fieldValidator = (req, res, next) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      code: errorCodesUtils.FIELD_VALIDATION,
      errors: errors.mapped()
    })
  }
  next()
}

export {
  fieldValidator
}