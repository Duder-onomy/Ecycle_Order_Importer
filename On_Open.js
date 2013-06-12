function onOpen() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet();
  var entries = [{
    name : "Process Ecycle",
    functionName : "ecycleProcess"
  }];
  sheet.addMenu("PostClub", entries);
};
