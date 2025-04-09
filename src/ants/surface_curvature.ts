// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const SURFACE_CURVATURE_METADATA: Metadata = {
    id: "87f1cb724fe10ba50c1127e085f66ffe3a26f96f.boutiques",
    name: "SurfaceCurvature",
    package: "ants",
    container_image_tag: "antsx/ants:v2.5.3",
};


interface SurfaceCurvatureParameters {
    "__STYXTYPE__": "SurfaceCurvature";
    "filename_in": InputPathType;
    "filename_out": string;
    "sigma": number;
    "option": number;
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
        "SurfaceCurvature": surface_curvature_cargs,
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
        "SurfaceCurvature": surface_curvature_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `surface_curvature(...)`.
 *
 * @interface
 */
interface SurfaceCurvatureOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * The processed image file.
     */
    output_image: OutputPathType;
}


function surface_curvature_params(
    filename_in: InputPathType,
    filename_out: string,
    sigma: number,
    option: number,
): SurfaceCurvatureParameters {
    /**
     * Build parameters.
    
     * @param filename_in The input image file in .nii format.
     * @param filename_out The output image file in .nii format.
     * @param sigma The sigma value for analysis.
     * @param option The operation mode: 0 for mean curvature, 5 for surface characterization, 6 for Gaussian curvature, and 7 for surface area.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "SurfaceCurvature" as const,
        "filename_in": filename_in,
        "filename_out": filename_out,
        "sigma": sigma,
        "option": option,
    };
    return params;
}


function surface_curvature_cargs(
    params: SurfaceCurvatureParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("SurfaceCurvature");
    cargs.push(execution.inputFile((params["filename_in"] ?? null)));
    cargs.push((params["filename_out"] ?? null));
    cargs.push(String((params["sigma"] ?? null)));
    cargs.push(String((params["option"] ?? null)));
    return cargs;
}


function surface_curvature_outputs(
    params: SurfaceCurvatureParameters,
    execution: Execution,
): SurfaceCurvatureOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: SurfaceCurvatureOutputs = {
        root: execution.outputFile("."),
        output_image: execution.outputFile([(params["filename_out"] ?? null)].join('')),
    };
    return ret;
}


function surface_curvature_execute(
    params: SurfaceCurvatureParameters,
    execution: Execution,
): SurfaceCurvatureOutputs {
    /**
     * The Shape Operator for Differential Analysis of Images. It can operate on binary or gray scale images with various modes to see different effects.
     * 
     * Author: ANTs Developers
     * 
     * URL: https://github.com/ANTsX/ANTs
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `SurfaceCurvatureOutputs`).
     */
    params = execution.params(params)
    const cargs = surface_curvature_cargs(params, execution)
    const ret = surface_curvature_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function surface_curvature(
    filename_in: InputPathType,
    filename_out: string,
    sigma: number,
    option: number,
    runner: Runner | null = null,
): SurfaceCurvatureOutputs {
    /**
     * The Shape Operator for Differential Analysis of Images. It can operate on binary or gray scale images with various modes to see different effects.
     * 
     * Author: ANTs Developers
     * 
     * URL: https://github.com/ANTsX/ANTs
    
     * @param filename_in The input image file in .nii format.
     * @param filename_out The output image file in .nii format.
     * @param sigma The sigma value for analysis.
     * @param option The operation mode: 0 for mean curvature, 5 for surface characterization, 6 for Gaussian curvature, and 7 for surface area.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `SurfaceCurvatureOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(SURFACE_CURVATURE_METADATA);
    const params = surface_curvature_params(filename_in, filename_out, sigma, option)
    return surface_curvature_execute(params, execution);
}


export {
      SURFACE_CURVATURE_METADATA,
      SurfaceCurvatureOutputs,
      SurfaceCurvatureParameters,
      surface_curvature,
      surface_curvature_params,
};
