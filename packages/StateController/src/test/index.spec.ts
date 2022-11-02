import { describe, it, expect } from "@jest/globals";
import {
    StateController,
    hostEvent,
    windowEvent,
    trackState,
    Product,
    connectRdtLogger
} from "../index";

describe("DataElement index", () => {
    it("exports the correct files", () => {
        expect(StateController).toBeDefined();
        expect(hostEvent).toBeDefined();
        expect(windowEvent).toBeDefined();
        expect(trackState).toBeDefined();
        expect(Product).toBeDefined();
        expect(connectRdtLogger).toBeDefined();
    });
});
