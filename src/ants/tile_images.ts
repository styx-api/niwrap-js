// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const TILE_IMAGES_METADATA: Metadata = {
    id: "d25b8eb520a9f772e1be8a0571d47dff47f48e49.boutiques",
    name: "TileImages",
    package: "ants",
    container_image_tag: "antsx/ants:v2.5.3",
};


interface TileImagesParameters {
    "__STYXTYPE__": "TileImages";
    "image_dimension": number;
    "output_image": string;
    "layout": string;
    "input_images": Array<InputPathType>;
}


function dynCargs(
    t: string,
): Function | undefined {
    /**
     * Get build cargs function by command type.
    
     * @param t Command type
    
     * @returns Build cargs function.
     */
    const cargsFuncs = {
        "TileImages": tile_images_cargs,
    };
    return cargsFuncs[t];
}


function dynOutputs(
    t: string,
): Function | undefined {
    /**
     * Get build outputs function by command type.
    
     * @param t Command type
    
     * @returns Build outputs function.
     */
    const outputsFuncs = {
        "TileImages": tile_images_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `tile_images(...)`.
 *
 * @interface
 */
interface TileImagesOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * The final tiled output image.
     */
    tiled_image: OutputPathType;
}


function tile_images_params(
    image_dimension: number,
    output_image: string,
    layout: string,
    input_images: Array<InputPathType>,
): TileImagesParameters {
    /**
     * Build parameters.
    
     * @param image_dimension Dimensionality of the output image.
     * @param output_image The path for the output tiled image.
     * @param layout Defines the structure of the tiled output image. The layout dictates the number and arrangement of input images in the output image.
     * @param input_images Input images to be tiled into the output image. The number of input images should match the layout specification.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "TileImages" as const,
        "image_dimension": image_dimension,
        "output_image": output_image,
        "layout": layout,
        "input_images": input_images,
    };
    return params;
}


function tile_images_cargs(
    params: TileImagesParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("TileImages");
    cargs.push(String((params["image_dimension"] ?? null)));
    cargs.push((params["output_image"] ?? null));
    cargs.push((params["layout"] ?? null));
    cargs.push(...(params["input_images"] ?? null).map(f => execution.inputFile(f)));
    return cargs;
}


function tile_images_outputs(
    params: TileImagesParameters,
    execution: Execution,
): TileImagesOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: TileImagesOutputs = {
        root: execution.outputFile("."),
        tiled_image: execution.outputFile([(params["output_image"] ?? null)].join('')),
    };
    return ret;
}


function tile_images_execute(
    params: TileImagesParameters,
    execution: Execution,
): TileImagesOutputs {
    /**
     * TileImages allows assembling images into a multi-dimensional array, producing a single output image. The input images must have a dimension less than or equal to the specified output image dimension.
     * 
     * Author: ANTs Developers
     * 
     * URL: https://github.com/ANTsX/ANTs
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `TileImagesOutputs`).
     */
    params = execution.params(params)
    const cargs = tile_images_cargs(params, execution)
    const ret = tile_images_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function tile_images(
    image_dimension: number,
    output_image: string,
    layout: string,
    input_images: Array<InputPathType>,
    runner: Runner | null = null,
): TileImagesOutputs {
    /**
     * TileImages allows assembling images into a multi-dimensional array, producing a single output image. The input images must have a dimension less than or equal to the specified output image dimension.
     * 
     * Author: ANTs Developers
     * 
     * URL: https://github.com/ANTsX/ANTs
    
     * @param image_dimension Dimensionality of the output image.
     * @param output_image The path for the output tiled image.
     * @param layout Defines the structure of the tiled output image. The layout dictates the number and arrangement of input images in the output image.
     * @param input_images Input images to be tiled into the output image. The number of input images should match the layout specification.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `TileImagesOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(TILE_IMAGES_METADATA);
    const params = tile_images_params(image_dimension, output_image, layout, input_images)
    return tile_images_execute(params, execution);
}


export {
      TILE_IMAGES_METADATA,
      TileImagesOutputs,
      TileImagesParameters,
      tile_images,
      tile_images_params,
};
