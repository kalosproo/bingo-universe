import { expect, it, vi } from 'vitest';
import { byText, render } from '../../test/testUtils';
import { WinnerModal } from '../WinnerModal';
it('shows winner and closes',()=>{const close=vi.fn(); render(<WinnerModal open winner="Ada" onClose={close}/>); expect(byText(/Ada wins/)).toBeTruthy(); (document.querySelector('button') as HTMLButtonElement).click(); expect(close).toHaveBeenCalledOnce()});
