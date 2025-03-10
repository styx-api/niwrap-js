// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const SURFACE_BASED_SMOOTHING_METADATA: Metadata = {
    id: "0f212837e6cfdb7d79585c7f58fe041aca5a9ef1.boutiques",
    name: "SurfaceBasedSmoothing",
    package: "ants",
    container_image_tag: "antsx/ants:v2.5.3",
};


interface SurfaceBasedSmoothingParameters {
    "__STYXTYPE__": "SurfaceBasedSmoothing";
    "image_to_smooth": InputPathType;
    "sigma": number;
    "surface_image": InputPathType;
    "outname": string;
    "num_repeats"?: number | null | undefined;
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
        "SurfaceBasedSmoothing": surface_based_smoothing_cargs,
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
        "SurfaceBasedSmoothing": surface_based_smoothing_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `surface_based_smoothing(...)`.
 *
 * @interface
 */
interface SurfaceBasedSmoothingOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * The output smoothed image.
     */
    smoothed_output: OutputPathType;
}


function surface_based_smoothing_params(
    image_to_smooth: InputPathType,
    sigma: number,
    surface_image: InputPathType,
    outname: string,
    num_repeats: number | null = null,
): SurfaceBasedSmoothingParameters {
    /**
     * Build parameters.
    
     * @param image_to_smooth The image that needs to be smoothed.
     * @param sigma Geodesic neighborhood radius.
     * @param surface_image Assumes a label == 1 that defines the surface.
     * @param outname The name of the output file.
     * @param num_repeats Number of times the geodesic neighborhood is applied repeatedly.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "SurfaceBasedSmoothing" as const,
        "image_to_smooth": image_to_smooth,
        "sigma": sigma,
        "surface_image": surface_image,
        "outname": outname,
    };
    if (num_repeats !== null) {
        params["num_repeats"] = num_repeats;
    }
    return params;
}


function surface_based_smoothing_cargs(
    params: SurfaceBasedSmoothingParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("SurfaceBasedSmoothing");
    cargs.push(execution.inputFile((params["image_to_smooth"] ?? null)));
    cargs.push(String((params["sigma"] ?? null)));
    cargs.push(execution.inputFile((params["surface_image"] ?? null)));
    cargs.push((params["outname"] ?? null));
    if ((params["num_repeats"] ?? null) !== null) {
        cargs.push(String((params["num_repeats"] ?? null)));
    }
    return cargs;
}


function surface_based_smoothing_outputs(
    params: SurfaceBasedSmoothingParameters,
    execution: Execution,
): SurfaceBasedSmoothingOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: SurfaceBasedSmoothingOutputs = {
        root: execution.outputFile("."),
        smoothed_output: execution.outputFile([(params["outname"] ?? null)].join('')),
    };
    return ret;
}


function surface_based_smoothing_execute(
    params: SurfaceBasedSmoothingParameters,
    execution: Execution,
): SurfaceBasedSmoothingOutputs {
    /**
     * Surface-based smoothing applied to ImageToSmooth using a geodesic neighbourhood defined by sigma and the surface image.
     * 
     * Author: ANTs Developers
     * 
     * URL: https://github.com/ANTsX/ANTs
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `SurfaceBasedSmoothingOutputs`).
     */
    params = execution.params(params)
    const cargs = surface_based_smoothing_cargs(params, execution)
    const ret = surface_based_smoothing_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function surface_based_smoothing(
    image_to_smooth: InputPathType,
    sigma: number,
    surface_image: InputPathType,
    outname: string,
    num_repeats: number | null = null,
    runner: Runner | null = null,
): SurfaceBasedSmoothingOutputs {
    /**
     * Surface-based smoothing applied to ImageToSmooth using a geodesic neighbourhood defined by sigma and the surface image.
     * 
     * Author: ANTs Developers
     * 
     * URL: https://github.com/ANTsX/ANTs
    
     * @param image_to_smooth The image that needs to be smoothed.
     * @param sigma Geodesic neighborhood radius.
     * @param surface_image Assumes a label == 1 that defines the surface.
     * @param outname The name of the output file.
     * @param num_repeats Number of times the geodesic neighborhood is applied repeatedly.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `SurfaceBasedSmoothingOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(SURFACE_BASED_SMOOTHING_METADATA);
    const params = surface_based_smoothing_params(image_to_smooth, sigma, surface_image, outname, num_repeats)
    return surface_based_smoothing_execute(params, execution);
}


export {
      SURFACE_BASED_SMOOTHING_METADATA,
      SurfaceBasedSmoothingOutputs,
      SurfaceBasedSmoothingParameters,
      surface_based_smoothing,
      surface_based_smoothing_params,
};
