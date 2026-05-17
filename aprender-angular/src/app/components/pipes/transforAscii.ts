import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:"transformarAscci"
})

export class transformarAscciPipes implements PipeTransform {
    transform(frase: string): string {
        if (!frase) return '';

        // Convertimos la frase en un arreglo de caracteres, mapeamos cada uno a su código ASCII y los unimos
        return frase
            .split('')
            .map(caracter => caracter.charCodeAt(0))
            .join(' ');
    }
}