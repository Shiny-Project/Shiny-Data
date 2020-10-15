import { types } from "mobx-state-tree";

const FormStore = types.model({
    blockId: types.optional(types.number, 0),
}).actions(self => ({
    updateBlockId(blockId: number) {
        self.blockId = blockId;
    }
}));

export default FormStore;
