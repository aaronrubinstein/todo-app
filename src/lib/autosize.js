import autosize from 'autosize';

export default (node) => {
    autosize(node);

    return {
        destroy() {
            autosize.destroy(node);
        }
    };
};

export function autosizeUpdate(node) {
    autosize.update(node);
}