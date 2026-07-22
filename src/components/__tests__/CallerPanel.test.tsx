import { expect, it, vi } from 'vitest';
import { render } from '../../test/testUtils';
import { CallerPanel } from '../CallerPanel';
it('calls a remaining number',()=>{const fn=vi.fn(); render(<CallerPanel called={[1,2,3]} onCall={fn}/>); (document.querySelector('button') as HTMLButtonElement).click(); expect(fn).toHaveBeenCalledOnce(); expect(fn.mock.calls[0][0]).toBeGreaterThan(3)});
