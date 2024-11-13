export interface IStatus {
  loading: boolean;
  success: boolean;
  failed: boolean;
}
const reducerStatuses: IStatus = {
  loading: false,
  success: false,
  failed: false,
};
export default reducerStatuses;