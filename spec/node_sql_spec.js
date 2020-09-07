const {pool,createTable,addNewVisitor,deleteVisitor, updateVisitor, viewOneVisitor, deleteAllVisitors, listAllVisitors} = require('../src/node_sql')

describe("Visitors mock test", () => {
    it("should check if the createTable is defined", function() {
        expect(createTable).toBeDefined();
      });
    it("spyOn addNewVisitor function", () => {
      spyOn(pool, 'query');
      addNewVisitor();
      expect(pool.query).toHaveBeenCalled();
    });
    it("should have been called", () => {
        spyOn(pool, "query");
        listAllVisitors()
        expect(pool.query).toHaveBeenCalled();
    });
    it("should delete a visitor", () => {
        spyOn(pool, "query");
        deleteVisitor()
        expect(pool.query).toHaveBeenCalled();
    });
    it("should update visitor", () => {
        spyOn(pool, "query");
        updateVisitor()
        expect(pool.query).toHaveBeenCalled();
    });
    it("should view one visitor", () => {
        spyOn(pool, "query");
        viewOneVisitor()
        expect(pool.query).toHaveBeenCalled();
    });
    it("should delete all visitor", () => {
        spyOn(pool, "query");
        deleteAllVisitors()
        expect(pool.query).toHaveBeenCalled();
    });
});