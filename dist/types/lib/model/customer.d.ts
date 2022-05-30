export interface Customer {
    CustomerID: Number;
    CustomerName: String;
    DBName: String;
    remarks?: any;
    Modules: String;
    VersionID?: Number;
    LastBackupPath: String;
    SiteName: String;
    UppgradeStatus?: any;
    IsBackup: Boolean;
    PermittedIps?: String;
    PrevVersitionId?: any;
    DependByDepartments?: Boolean;
}
