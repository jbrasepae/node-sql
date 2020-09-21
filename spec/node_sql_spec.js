const {addNewVisitor,createTable,listAllVisitors, deleteVisitor, updateVisitor, viewOneVisitor, deleteAllVisitors} = require('../src/node_sql')

describe("Visitors mock test", () => {
    it("should check if the createTable is defined", function() {
        expect(createTable).toBeDefined();
      });
    it("spyOn addNewVisitor function", () => {
      var newVisitor = {addNewVisitor};
      spyOn(newVisitor, 'addNewVisitor');
      newVisitor.addNewVisitor('Tumi',21,'2020-10-15','11:59:05','Vicent Jacobs','great service');
      expect(newVisitor.addNewVisitor).toHaveBeenCalled();
    });
    it("should have been called", () => {
        var list = {listAllVisitors};
        spyOn(list, "listAllVisitors");
        list.listAllVisitors();
        expect(list.listAllVisitors).toHaveBeenCalled();
    });
    it("should delete a visitor", () => {
        var deletes = {deleteVisitor};
        spyOn(deletes, "deleteVisitor");
        deletes.deleteVisitor();
        expect(deletes.deleteVisitor).toHaveBeenCalled();
    });
    it("should update visitor", () => {
        var updates = {updateVisitor};
        spyOn(updates, "updateVisitor");
        updates.updateVisitor();
        expect(updates.updateVisitor).toHaveBeenCalled();
    });
    it("should view one visitor", () => {
        var viewVisitor = {viewOneVisitor};
        spyOn(viewVisitor, "viewOneVisitor");
        viewVisitor.viewOneVisitor();
        expect(viewVisitor.viewOneVisitor).toHaveBeenCalled();
    });
    it("should delete all visitor", () => {
        var deleteAll = {deleteAllVisitors}
        spyOn(deleteAll, "deleteAllVisitors");
        deleteAll.deleteAllVisitors();
        expect(deleteAll.deleteAllVisitors).toHaveBeenCalled();
    });
});