import { screen, render, userEvent } from './tests/index';

import { Dropdown } from './Dropdown';

const title = 'Selecione seu Pokémon Inicial' 
const options = ['Bulbassauro', 'Charmander', 'Squirtle']

describe('Dropdown', () => {

    // Dropdown começa fechado
    it('should start closed', () => {
        render(
            <Dropdown 
            setPokemon={() => {}} 
            title={title} 
            options={options}/>
        );
        // Se os valores não estão na tela, o menu está fechado
        expect(screen.queryByText(options[0])).not.toBeInTheDocument();
        expect(screen.queryByText(options[1])).not.toBeInTheDocument();
        expect(screen.queryByText(options[2])).not.toBeInTheDocument();
    });

    it('should show option when open', () => {
        render(
            <Dropdown 
            setPokemon={() => {}} 
            title={title} 
            options={options}
            />
        );

        // Valores aparecem na tela depois do click
        
        userEvent.click(screen.getByRole('button'))

        expect(screen.getByRole('menuitem', {name: options[0]})).toBeInTheDocument();        
        expect(screen.getByRole('menuitem', {name: options[1]})).toBeInTheDocument();
        expect(screen.getByRole('menuitem', {name: options[2]})).toBeInTheDocument();
    });

    it('should select a pokemon and close dropdown', () => {
        const setPokemon = jest.fn();
        
        render(
            <Dropdown 
            setPokemon={setPokemon} 
            title={title} 
            options={options}
            />
        );

        // Valores aparecem na tela depois do click
        userEvent.click(screen.getByRole('button'))

        expect(screen.getByRole('menuitem', {name: options[0]})).toBeInTheDocument();        
        expect(screen.getByRole('menuitem', {name: options[1]})).toBeInTheDocument();
        expect(screen.getByRole('menuitem', {name: options[2]})).toBeInTheDocument();

        // Clica em uma das opções que apareceram
        userEvent.click(screen.getByRole('menuitem', {name: options[0]}));

        expect(setPokemon).toHaveBeenCalledWith(options[0]);

        // Menu foi fechado e agora os valores não podem ser adquiridos
        expect(screen.queryByText(options[0])).not.toBeInTheDocument();
        expect(screen.queryByText(options[1])).not.toBeInTheDocument();
        expect(screen.queryByText(options[2])).not.toBeInTheDocument();
    });
});
