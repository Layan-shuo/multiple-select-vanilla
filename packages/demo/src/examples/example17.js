import { MultipleSelectInstance, multipleSelect } from 'multiple-select-vanilla';

export default class Example {
   mount() {
      const ms1 = multipleSelect('#multiple-select', {
         name: 'my-select',
         single: false,
         useSelectOptionLabelToHtml: true,
         // sanitizer: (html) => DOMPurify.sanitize(html, { RETURN_TRUSTED_TYPE: true }), // return TrustedHTML Type
         data: [
            { text: '<i class="fa fa-star"></i> January', value: 1 },
            { text: '<i class="fa fa-star"></i> February', value: 2 },
         ]
      });
   }

   unmount() {

   }
}
