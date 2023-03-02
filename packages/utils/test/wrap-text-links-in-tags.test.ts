import { wrapTextLinksInTags } from '../src/wrap-text-links-in-tags';

it('wrap https links', () => {
  expect(wrapTextLinksInTags('some text before https://tracker.yandex.ru/BK-227 text after'))
    .toBe( 'some text before <a href="https://tracker.yandex.ru/BK-227" target="_blank">https://tracker.yandex.ru/BK-227</a> text after');
});

it('wrap www links', () => {
  expect(wrapTextLinksInTags('text before www.bla_bla.ru/ text after'))
    .toBe( 'text before <a href="https://www.bla_bla.ru/" target="_blank">www.bla_bla.ru/</a> text after');
});

it('wrap several links', () => {
  const str = 'some text www.bla_bla.ru/ text after https://tracker.yandex.ru/BK-227 &$# end';
  const expected = 'some text <a href="https://www.bla_bla.ru/" target="_blank">www.bla_bla.ru/</a> text after <a href="https://tracker.yandex.ru/BK-227" target="_blank">https://tracker.yandex.ru/BK-227</a> &$# end';
  expect(wrapTextLinksInTags(str)).toBe(expected);
});

it('ignore http links', () => {
  expect(wrapTextLinksInTags('text before http://bla_bla.ru text after'))
    .toBe( 'text before http://bla_bla.ru text after');
});
