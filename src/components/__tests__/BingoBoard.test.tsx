import { describe, expect, it, vi } from 'vitest';
import { render } from '../../test/testUtils';
import { BingoBoard } from '../BingoBoard';
it('renders cells and toggles',()=>{const fn=vi.fn(); render(<BingoBoard size={1} cells={[{id:'1',value:42,marked:false}]} onToggle={fn}/>); (document.querySelector('button') as HTMLButtonElement).click(); expect(fn).toHaveBeenCalledWith('1')});
