// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const IMROTATE_METADATA: Metadata = {
    id: "046eb12264816ed4b6d2246d2d697caf596e0670.boutiques",
    name: "imrotate",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface ImrotateParameters {
    "__STYXTYPE__": "imrotate";
    "fourier_interpolation": boolean;
    "dx": number;
    "dy": number;
    "phi": number;
    "input_image": InputPathType;
    "output_image": string;
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
        "imrotate": imrotate_cargs,
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
        "imrotate": imrotate_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `imrotate(...)`.
 *
 * @interface
 */
interface ImrotateOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Path to the output image file
     */
    output_image_file: OutputPathType;
}


function imrotate_params(
    dx: number,
    dy: number,
    phi: number,
    input_image: InputPathType,
    output_image: string,
    fourier_interpolation: boolean = false,
): ImrotateParameters {
    /**
     * Build parameters.
    
     * @param dx Pixels to shift rightwards (can be non-integer)
     * @param dy Pixels to shift downwards (can be non-integer)
     * @param phi Degrees to rotate clockwise
     * @param input_image Input image file
     * @param output_image Output image file
     * @param fourier_interpolation Use Fourier interpolation
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "imrotate" as const,
        "fourier_interpolation": fourier_interpolation,
        "dx": dx,
        "dy": dy,
        "phi": phi,
        "input_image": input_image,
        "output_image": output_image,
    };
    return params;
}


function imrotate_cargs(
    params: ImrotateParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("imrotate");
    if ((params["fourier_interpolation"] ?? null)) {
        cargs.push("-Fourier");
    }
    cargs.push(String((params["dx"] ?? null)));
    cargs.push(String((params["dy"] ?? null)));
    cargs.push(String((params["phi"] ?? null)));
    cargs.push(execution.inputFile((params["input_image"] ?? null)));
    cargs.push((params["output_image"] ?? null));
    return cargs;
}


function imrotate_outputs(
    params: ImrotateParameters,
    execution: Execution,
): ImrotateOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: ImrotateOutputs = {
        root: execution.outputFile("."),
        output_image_file: execution.outputFile([(params["output_image"] ?? null)].join('')),
    };
    return ret;
}


function imrotate_execute(
    params: ImrotateParameters,
    execution: Execution,
): ImrotateOutputs {
    /**
     * Shifts and rotates an image.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `ImrotateOutputs`).
     */
    params = execution.params(params)
    const cargs = imrotate_cargs(params, execution)
    const ret = imrotate_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function imrotate(
    dx: number,
    dy: number,
    phi: number,
    input_image: InputPathType,
    output_image: string,
    fourier_interpolation: boolean = false,
    runner: Runner | null = null,
): ImrotateOutputs {
    /**
     * Shifts and rotates an image.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param dx Pixels to shift rightwards (can be non-integer)
     * @param dy Pixels to shift downwards (can be non-integer)
     * @param phi Degrees to rotate clockwise
     * @param input_image Input image file
     * @param output_image Output image file
     * @param fourier_interpolation Use Fourier interpolation
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `ImrotateOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(IMROTATE_METADATA);
    const params = imrotate_params(dx, dy, phi, input_image, output_image, fourier_interpolation)
    return imrotate_execute(params, execution);
}


export {
      IMROTATE_METADATA,
      ImrotateOutputs,
      ImrotateParameters,
      imrotate,
      imrotate_params,
};
