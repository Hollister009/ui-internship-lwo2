import { convertHTML } from './convert-html-entities';


describe('Convert HTML entities', () => {

    test('convertHTML("Dolce & Gabbana") should return Dolce &​amp; Gabbana', () => {
        expect(convertHTML("Dolce & Gabbana")).toBe('Dolce &amp; Gabbana');
    });

    test('convertHTML("Hamburgers < Pizza < Tacos") should return Hamburgers &​lt; Pizza &​lt; Tacos', () => {
        expect(convertHTML("Hamburgers < Pizza < Tacos")).toBe('Hamburgers &lt; Pizza &lt; Tacos');
    });

    test('convertHTML("Sixty > twelve") should return Sixty &​gt; twelve', () => {
        expect(convertHTML("Sixty > twelve")).toBe('Sixty &gt; twelve');
    });

    test(`convertHTML('Stuff in "quotation marks"') should return Stuff in &​quot;quotation marks&​quot;`, () => {
        expect(convertHTML('Stuff in "quotation marks"')).toBe('Stuff in &quot;quotation marks&quot;');
    });

    test(`convertHTML('Shindler's List') should return Shindler&​apos;s List`, () => {
        expect(convertHTML("Shindler's List")).toBe('Shindler&apos;s List');
    });

    test(`convertHTML('<>') should return &​lt;&​gt;`, () => {
        expect(convertHTML("<>")).toBe('&lt;&gt;');
    });

});
