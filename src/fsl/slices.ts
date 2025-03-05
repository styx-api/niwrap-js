// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const SLICES_METADATA: Metadata = {
    id: "a8594492356fc058a9bcf77bee3fdf328139290d.boutiques",
    name: "slices",
    package: "fsl",
    container_image_tag: "brainlife/fsl:6.0.4-patched2",
};


interface SlicesParameters {
    "__STYXTYPE__": "slices";
    "primary_input": InputPathType;
    "secondary_input"?: InputPathType | null | undefined;
    "scale_factor"?: number | null | undefined;
    "intensity_range"?: Array<number> | null | undefined;
    "output_gif"?: string | null | undefined;
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
        "slices": slices_cargs,
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
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `slices(...)`.
 *
 * @interface
 */
interface SlicesOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function slices_params(
    primary_input: InputPathType,
    secondary_input: InputPathType | null = null,
    scale_factor: number | null = null,
    intensity_range: Array<number> | null = null,
    output_gif: string | null = null,
): SlicesParameters {
    /**
     * Build parameters.
    
     * @param primary_input Primary input image file (e.g. img1.nii.gz)
     * @param secondary_input Secondary input image file (e.g. img2.nii.gz)
     * @param scale_factor Scale factor to apply to images.
     * @param intensity_range Intensity range to consider (minimum and maximum values).
     * @param output_gif Output GIF file.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "slices" as const,
        "primary_input": primary_input,
    };
    if (secondary_input !== null) {
        params["secondary_input"] = secondary_input;
    }
    if (scale_factor !== null) {
        params["scale_factor"] = scale_factor;
    }
    if (intensity_range !== null) {
        params["intensity_range"] = intensity_range;
    }
    if (output_gif !== null) {
        params["output_gif"] = output_gif;
    }
    return params;
}


function slices_cargs(
    params: SlicesParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("slices");
    cargs.push(execution.inputFile((params["primary_input"] ?? null)));
    if ((params["secondary_input"] ?? null) !== null) {
        cargs.push(execution.inputFile((params["secondary_input"] ?? null)));
    }
    if ((params["scale_factor"] ?? null) !== null) {
        cargs.push(
            "-s",
            String((params["scale_factor"] ?? null))
        );
    }
    if ((params["intensity_range"] ?? null) !== null) {
        cargs.push(
            "-i",
            ...(params["intensity_range"] ?? null).map(String)
        );
    }
    if ((params["output_gif"] ?? null) !== null) {
        cargs.push(
            "-o",
            (params["output_gif"] ?? null)
        );
    }
    return cargs;
}


function slices_outputs(
    params: SlicesParameters,
    execution: Execution,
): SlicesOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: SlicesOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function slices_execute(
    params: SlicesParameters,
    execution: Execution,
): SlicesOutputs {
    /**
     * Generate a set of slices from an image, possibly with some scaling and intensity range options, and save as a GIF.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `SlicesOutputs`).
     */
    params = execution.params(params)
    const cargs = slices_cargs(params, execution)
    const ret = slices_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function slices(
    primary_input: InputPathType,
    secondary_input: InputPathType | null = null,
    scale_factor: number | null = null,
    intensity_range: Array<number> | null = null,
    output_gif: string | null = null,
    runner: Runner | null = null,
): SlicesOutputs {
    /**
     * Generate a set of slices from an image, possibly with some scaling and intensity range options, and save as a GIF.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param primary_input Primary input image file (e.g. img1.nii.gz)
     * @param secondary_input Secondary input image file (e.g. img2.nii.gz)
     * @param scale_factor Scale factor to apply to images.
     * @param intensity_range Intensity range to consider (minimum and maximum values).
     * @param output_gif Output GIF file.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `SlicesOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(SLICES_METADATA);
    const params = slices_params(primary_input, secondary_input, scale_factor, intensity_range, output_gif)
    return slices_execute(params, execution);
}


export {
      SLICES_METADATA,
      SlicesOutputs,
      SlicesParameters,
      slices,
      slices_params,
};
