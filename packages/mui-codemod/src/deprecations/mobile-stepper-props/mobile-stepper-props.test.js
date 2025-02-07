import { describeJscodeshiftTransform } from '../../../testUtils';
import transform from './mobile-stepper-props';

describe('@mui/codemod', () => {
  describe('deprecations', () => {
    describeJscodeshiftTransform({
      transform,
      transformName: 'mobile-stepper-props',
      dirname: __dirname,
      testCases: [
        { actual: '/test-cases/actual.js', expected: '/test-cases/expected.js' },
        { actual: '/test-cases/theme.actual.js', expected: '/test-cases/theme.expected.js' },
      ],
    });
  });
});
