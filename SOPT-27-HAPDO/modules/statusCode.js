//statusCode를 상수화해서 저장해둔 모듈 => 표준에 따라서 추가해야함
module.exports = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  RESET_CONTENT: 205,
  NOT_MODIFIED: 304,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
  SERVICE_UNAVAILABLE: 503,
}