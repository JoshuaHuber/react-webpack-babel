export default class RoutesService {
  static rootPath() {
    return `/`
  }
  static vinPath(vin) {
    return `${this.rootPath()}vin/${vin}`
  }
}
