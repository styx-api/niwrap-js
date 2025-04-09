// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const DJPEG_METADATA: Metadata = {
    id: "9c5e3f0913e97439eefa4801b85b0734d0587e4a.boutiques",
    name: "djpeg",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface DjpegParameters {
    "__STYXTYPE__": "djpeg";
    "input_file": InputPathType;
    "output_file": string;
    "gray": boolean;
    "fast_dct": boolean;
    "one_pixel_height": boolean;
    "pseudo_pixel_ratio": boolean;
    "crop_region"?: string | null | undefined;
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
        "djpeg": djpeg_cargs,
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
        "djpeg": djpeg_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `djpeg(...)`.
 *
 * @interface
 */
interface DjpegOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Output image file
     */
    output_image: OutputPathType;
}


function djpeg_params(
    input_file: InputPathType,
    output_file: string,
    gray: boolean = false,
    fast_dct: boolean = false,
    one_pixel_height: boolean = false,
    pseudo_pixel_ratio: boolean = false,
    crop_region: string | null = null,
): DjpegParameters {
    /**
     * Build parameters.
    
     * @param input_file Input JPEG file (e.g. image.jpg)
     * @param output_file Output image file (e.g. image.ppm)
     * @param gray Force grayscale output
     * @param fast_dct Prevent dithering of output
     * @param one_pixel_height Force one-pixel modulation flag
     * @param pseudo_pixel_ratio Force pseudo-pixel ratio flag
     * @param crop_region Crop region (syntax: WxH+X+Y, e.g., 100x100+10+10)
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "djpeg" as const,
        "input_file": input_file,
        "output_file": output_file,
        "gray": gray,
        "fast_dct": fast_dct,
        "one_pixel_height": one_pixel_height,
        "pseudo_pixel_ratio": pseudo_pixel_ratio,
    };
    if (crop_region !== null) {
        params["crop_region"] = crop_region;
    }
    return params;
}


function djpeg_cargs(
    params: DjpegParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("djpeg");
    cargs.push(execution.inputFile((params["input_file"] ?? null)));
    cargs.push((params["output_file"] ?? null));
    if ((params["gray"] ?? null)) {
        cargs.push("-grayscale");
    }
    if ((params["fast_dct"] ?? null)) {
        cargs.push("-fast");
    }
    if ((params["one_pixel_height"] ?? null)) {
        cargs.push("-onepixel");
    }
    if ((params["pseudo_pixel_ratio"] ?? null)) {
        cargs.push("-236");
    }
    if ((params["crop_region"] ?? null) !== null) {
        cargs.push(
            "-crop",
            (params["crop_region"] ?? null)
        );
    }
    return cargs;
}


function djpeg_outputs(
    params: DjpegParameters,
    execution: Execution,
): DjpegOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: DjpegOutputs = {
        root: execution.outputFile("."),
        output_image: execution.outputFile([(params["output_file"] ?? null)].join('')),
    };
    return ret;
}


function djpeg_execute(
    params: DjpegParameters,
    execution: Execution,
): DjpegOutputs {
    /**
     * Decompress a JPEG file to an image file.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `DjpegOutputs`).
     */
    params = execution.params(params)
    const cargs = djpeg_cargs(params, execution)
    const ret = djpeg_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function djpeg(
    input_file: InputPathType,
    output_file: string,
    gray: boolean = false,
    fast_dct: boolean = false,
    one_pixel_height: boolean = false,
    pseudo_pixel_ratio: boolean = false,
    crop_region: string | null = null,
    runner: Runner | null = null,
): DjpegOutputs {
    /**
     * Decompress a JPEG file to an image file.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param input_file Input JPEG file (e.g. image.jpg)
     * @param output_file Output image file (e.g. image.ppm)
     * @param gray Force grayscale output
     * @param fast_dct Prevent dithering of output
     * @param one_pixel_height Force one-pixel modulation flag
     * @param pseudo_pixel_ratio Force pseudo-pixel ratio flag
     * @param crop_region Crop region (syntax: WxH+X+Y, e.g., 100x100+10+10)
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `DjpegOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(DJPEG_METADATA);
    const params = djpeg_params(input_file, output_file, gray, fast_dct, one_pixel_height, pseudo_pixel_ratio, crop_region)
    return djpeg_execute(params, execution);
}


export {
      DJPEG_METADATA,
      DjpegOutputs,
      DjpegParameters,
      djpeg,
      djpeg_params,
};
