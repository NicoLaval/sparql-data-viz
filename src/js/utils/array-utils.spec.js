import { deleteLabelFromArray, extractLabel } from './array-utils';

describe('array-utils', () => {
	describe('deleteLabelFromArray', () => {
		it('should return empty array', () => {
			expect(deleteLabelFromArray([])).toEqual([]);
		});
		it('should return the same array', () => {
			const input = [{ name: 'toto', id: '1' }, { name: 'titi', id: '2' }];
			expect(deleteLabelFromArray(input)).toEqual(input);
		});
		it('should return array without label in objects', () => {
			const input = [{ label: 'toto', id: '1' }, { label: 'titi', id: '2' }];
			const res = [{ id: '1' }, { id: '2' }];
			expect(deleteLabelFromArray(input)).toEqual(res);
		});
	});
	describe('extractLabel', () => {
		it('should return false', () => {
			expect(extractLabel([])).toBeFalsy();
		});
		// it('should return empty string', () => {
		// 	expect(extractLabel([{ name: 'toto' }])).toEqual('');
		// });
		it('should return label', () => {
			const input = [
				{ label: 'areaLabel', x: '1', y: '2' },
				{ label: 'areaLabel', x: '2', y: '4' },
			];
			expect(extractLabel(input)).toEqual('areaLabel');
		});
	});
});
