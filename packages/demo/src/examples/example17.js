import { MultipleSelectInstance, multipleSelect } from 'multiple-select-vanilla';

// export default class Example {
//   ms: MultipleSelectInstance[] = [];

//   mount() {
//     this.ms = multipleSelect('.multiple-select') as MultipleSelectInstance[];
//   }

//   unmount() {
//     // destroy ms instance(s) to avoid DOM leaks
//     this.ms.forEach(m => m.destroy());
//     this.ms = [];
//   }
// }

const ms1 = multipleSelect('.multiple-select', {
    name: 'my-select',
    single: false,
    useSelectOptionLabelToHtml: true,
    // sanitizer: (html) => DOMPurify.sanitize(html, { RETURN_TRUSTED_TYPE: true }), // return TrustedHTML Type
    data: [
       { text: '<i class="fa fa-star"></i> January', value: 1 },
       { text: '<i class="fa fa-star"></i> February', value: 2 },
    ]
 });
 export default ms1;