import FilterRendererRegistry from './FilterRendererRegistry';
import { HasActiveIncidentsRenderer } from './incident/HasActiveIncidentsRenderer';
import { HasSiblingsRenderer } from './siblings/HasSiblingsRenderer';

/**
 * Configure the render registry.
 */
const RENDERERS = [new HasActiveIncidentsRenderer(), new HasSiblingsRenderer()];
const REGISTRY = new FilterRendererRegistry();
RENDERERS.forEach((renderer) => REGISTRY.register(renderer));

/**
 * Used to render custom filter views for a particular facet field.
 */
export const useFilterRendererRegistry = () => {
    return REGISTRY;
};
