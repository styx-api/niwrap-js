// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const IMAVER_METADATA: Metadata = {
    id: "8d8afa638c5562c34495b2bfecf8b92253a461cf.boutiques",
    name: "imaver",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface ImaverParameters {
    "__STYXTYPE__": "imaver";
    "out_ave"?: string | null | undefined;
    "out_sig"?: string | null | undefined;
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
        "imaver": imaver_cargs,
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
        "imaver": imaver_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `imaver(...)`.
 *
 * @interface
 */
interface ImaverOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Output image file for averages (optional)
     */
    out_ave_output: OutputPathType | null;
    /**
     * Output image file for standard deviations (optional)
     */
    out_sig_output: OutputPathType | null;
}


function imaver_params(
    input_images: Array<InputPathType>,
    out_ave: string | null = null,
    out_sig: string | null = null,
): ImaverParameters {
    /**
     * Build parameters.
    
     * @param input_images Input image files for processing
     * @param out_ave Output average image file. Use '-' to skip output.
     * @param out_sig Output standard deviation image file. Use '-' to skip output.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "imaver" as const,
        "input_images": input_images,
    };
    if (out_ave !== null) {
        params["out_ave"] = out_ave;
    }
    if (out_sig !== null) {
        params["out_sig"] = out_sig;
    }
    return params;
}


function imaver_cargs(
    params: ImaverParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("imaver");
    if ((params["out_ave"] ?? null) !== null) {
        cargs.push((params["out_ave"] ?? null));
    }
    if ((params["out_sig"] ?? null) !== null) {
        cargs.push((params["out_sig"] ?? null));
    }
    cargs.push(...(params["input_images"] ?? null).map(f => execution.inputFile(f)));
    return cargs;
}


function imaver_outputs(
    params: ImaverParameters,
    execution: Execution,
): ImaverOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: ImaverOutputs = {
        root: execution.outputFile("."),
        out_ave_output: ((params["out_ave"] ?? null) !== null) ? execution.outputFile([(params["out_ave"] ?? null)].join('')) : null,
        out_sig_output: ((params["out_sig"] ?? null) !== null) ? execution.outputFile([(params["out_sig"] ?? null)].join('')) : null,
    };
    return ret;
}


function imaver_execute(
    params: ImaverParameters,
    execution: Execution,
): ImaverOutputs {
    /**
     * Computes the mean and standard deviation, pixel-by-pixel, of a whole bunch of images.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `ImaverOutputs`).
     */
    params = execution.params(params)
    const cargs = imaver_cargs(params, execution)
    const ret = imaver_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function imaver(
    input_images: Array<InputPathType>,
    out_ave: string | null = null,
    out_sig: string | null = null,
    runner: Runner | null = null,
): ImaverOutputs {
    /**
     * Computes the mean and standard deviation, pixel-by-pixel, of a whole bunch of images.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param input_images Input image files for processing
     * @param out_ave Output average image file. Use '-' to skip output.
     * @param out_sig Output standard deviation image file. Use '-' to skip output.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `ImaverOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(IMAVER_METADATA);
    const params = imaver_params(input_images, out_ave, out_sig)
    return imaver_execute(params, execution);
}


export {
      IMAVER_METADATA,
      ImaverOutputs,
      ImaverParameters,
      imaver,
      imaver_params,
};
