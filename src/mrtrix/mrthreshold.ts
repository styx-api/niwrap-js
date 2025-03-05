// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const MRTHRESHOLD_METADATA: Metadata = {
    id: "5f0e00d650d7ff4c22350347b81985e0b496eddf.boutiques",
    name: "mrthreshold",
    package: "mrtrix",
    container_image_tag: "mrtrix3/mrtrix3:3.0.4",
};


interface MrthresholdConfigParameters {
    "__STYXTYPE__": "config";
    "key": string;
    "value": string;
}


interface MrthresholdParameters {
    "__STYXTYPE__": "mrthreshold";
    "abs"?: number | null | undefined;
    "percentile"?: number | null | undefined;
    "top"?: number | null | undefined;
    "bottom"?: number | null | undefined;
    "allvolumes": boolean;
    "ignorezero": boolean;
    "mask"?: InputPathType | null | undefined;
    "comparison"?: string | null | undefined;
    "invert": boolean;
    "out_masked": boolean;
    "nan": boolean;
    "info": boolean;
    "quiet": boolean;
    "debug": boolean;
    "force": boolean;
    "nthreads"?: number | null | undefined;
    "config"?: Array<MrthresholdConfigParameters> | null | undefined;
    "help": boolean;
    "version": boolean;
    "input": InputPathType;
    "output"?: string | null | undefined;
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
        "mrthreshold": mrthreshold_cargs,
        "config": mrthreshold_config_cargs,
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
        "mrthreshold": mrthreshold_outputs,
    };
    return outputsFuncs[t];
}


function mrthreshold_config_params(
    key: string,
    value: string,
): MrthresholdConfigParameters {
    /**
     * Build parameters.
    
     * @param key temporarily set the value of an MRtrix config file entry.
     * @param value temporarily set the value of an MRtrix config file entry.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "config" as const,
        "key": key,
        "value": value,
    };
    return params;
}


function mrthreshold_config_cargs(
    params: MrthresholdConfigParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("-config");
    cargs.push((params["key"] ?? null));
    cargs.push((params["value"] ?? null));
    return cargs;
}


/**
 * Output object returned when calling `mrthreshold(...)`.
 *
 * @interface
 */
interface MrthresholdOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * the (optional) output binary image mask
     */
    output: OutputPathType | null;
}


function mrthreshold_params(
    input: InputPathType,
    abs: number | null = null,
    percentile: number | null = null,
    top: number | null = null,
    bottom: number | null = null,
    allvolumes: boolean = false,
    ignorezero: boolean = false,
    mask: InputPathType | null = null,
    comparison: string | null = null,
    invert: boolean = false,
    out_masked: boolean = false,
    nan: boolean = false,
    info: boolean = false,
    quiet: boolean = false,
    debug: boolean = false,
    force: boolean = false,
    nthreads: number | null = null,
    config: Array<MrthresholdConfigParameters> | null = null,
    help: boolean = false,
    version: boolean = false,
    output: string | null = null,
): MrthresholdParameters {
    /**
     * Build parameters.
    
     * @param input the input image to be thresholded
     * @param abs specify threshold value as absolute intensity
     * @param percentile determine threshold based on some percentile of the image intensity distribution
     * @param top determine threshold that will result in selection of some number of top-valued voxels
     * @param bottom determine & apply threshold resulting in selection of some number of bottom-valued voxels (note: implies threshold application operator of "le" unless otherwise specified)
     * @param allvolumes compute a single threshold for all image volumes, rather than an individual threshold per volume
     * @param ignorezero ignore zero-valued input values during threshold determination
     * @param mask compute the threshold based only on values within an input mask image
     * @param comparison comparison operator to use when applying the threshold; options are: lt,le,ge,gt (default = "le" for -bottom; "ge" otherwise)
     * @param invert invert the output binary mask (equivalent to flipping the operator; provided for backwards compatibility)
     * @param out_masked mask the output image based on the provided input mask image
     * @param nan set voxels that fail the threshold to NaN rather than zero (output image will be floating-point rather than binary)
     * @param info display information messages.
     * @param quiet do not display information messages or progress status; alternatively, this can be achieved by setting the MRTRIX_QUIET environment variable to a non-empty string.
     * @param debug display debugging messages.
     * @param force force overwrite of output files (caution: using the same file as input and output might cause unexpected behaviour).
     * @param nthreads use this number of threads in multi-threaded applications (set to 0 to disable multi-threading).
     * @param config temporarily set the value of an MRtrix config file entry.
     * @param help display this information page and exit.
     * @param version display version information and exit.
     * @param output the (optional) output binary image mask
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "mrthreshold" as const,
        "allvolumes": allvolumes,
        "ignorezero": ignorezero,
        "invert": invert,
        "out_masked": out_masked,
        "nan": nan,
        "info": info,
        "quiet": quiet,
        "debug": debug,
        "force": force,
        "help": help,
        "version": version,
        "input": input,
    };
    if (abs !== null) {
        params["abs"] = abs;
    }
    if (percentile !== null) {
        params["percentile"] = percentile;
    }
    if (top !== null) {
        params["top"] = top;
    }
    if (bottom !== null) {
        params["bottom"] = bottom;
    }
    if (mask !== null) {
        params["mask"] = mask;
    }
    if (comparison !== null) {
        params["comparison"] = comparison;
    }
    if (nthreads !== null) {
        params["nthreads"] = nthreads;
    }
    if (config !== null) {
        params["config"] = config;
    }
    if (output !== null) {
        params["output"] = output;
    }
    return params;
}


function mrthreshold_cargs(
    params: MrthresholdParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("mrthreshold");
    if ((params["abs"] ?? null) !== null) {
        cargs.push(
            "-abs",
            String((params["abs"] ?? null))
        );
    }
    if ((params["percentile"] ?? null) !== null) {
        cargs.push(
            "-percentile",
            String((params["percentile"] ?? null))
        );
    }
    if ((params["top"] ?? null) !== null) {
        cargs.push(
            "-top",
            String((params["top"] ?? null))
        );
    }
    if ((params["bottom"] ?? null) !== null) {
        cargs.push(
            "-bottom",
            String((params["bottom"] ?? null))
        );
    }
    if ((params["allvolumes"] ?? null)) {
        cargs.push("-allvolumes");
    }
    if ((params["ignorezero"] ?? null)) {
        cargs.push("-ignorezero");
    }
    if ((params["mask"] ?? null) !== null) {
        cargs.push(
            "-mask",
            execution.inputFile((params["mask"] ?? null))
        );
    }
    if ((params["comparison"] ?? null) !== null) {
        cargs.push(
            "-comparison",
            (params["comparison"] ?? null)
        );
    }
    if ((params["invert"] ?? null)) {
        cargs.push("-invert");
    }
    if ((params["out_masked"] ?? null)) {
        cargs.push("-out_masked");
    }
    if ((params["nan"] ?? null)) {
        cargs.push("-nan");
    }
    if ((params["info"] ?? null)) {
        cargs.push("-info");
    }
    if ((params["quiet"] ?? null)) {
        cargs.push("-quiet");
    }
    if ((params["debug"] ?? null)) {
        cargs.push("-debug");
    }
    if ((params["force"] ?? null)) {
        cargs.push("-force");
    }
    if ((params["nthreads"] ?? null) !== null) {
        cargs.push(
            "-nthreads",
            String((params["nthreads"] ?? null))
        );
    }
    if ((params["config"] ?? null) !== null) {
        cargs.push(...(params["config"] ?? null).map(s => dynCargs(s.__STYXTYPE__)(s, execution)).flat());
    }
    if ((params["help"] ?? null)) {
        cargs.push("-help");
    }
    if ((params["version"] ?? null)) {
        cargs.push("-version");
    }
    cargs.push(execution.inputFile((params["input"] ?? null)));
    if ((params["output"] ?? null) !== null) {
        cargs.push((params["output"] ?? null));
    }
    return cargs;
}


function mrthreshold_outputs(
    params: MrthresholdParameters,
    execution: Execution,
): MrthresholdOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: MrthresholdOutputs = {
        root: execution.outputFile("."),
        output: ((params["output"] ?? null) !== null) ? execution.outputFile([(params["output"] ?? null)].join('')) : null,
    };
    return ret;
}


function mrthreshold_execute(
    params: MrthresholdParameters,
    execution: Execution,
): MrthresholdOutputs {
    /**
     * Create bitwise image by thresholding image intensity.
     * 
     * The threshold value to be applied can be determined in one of a number of ways:
     * 
     * - If no relevant command-line option is used, the command will automatically determine an optimal threshold;
     * 
     * - The -abs option provides the threshold value explicitly;
     * 
     * - The -percentile, -top and -bottom options enable more fine-grained control over how the threshold value is determined.
     * 
     * The -mask option only influences those image values that contribute toward the determination of the threshold value; once the threshold is determined, it is applied to the entire image, irrespective of use of the -mask option. If you wish for the voxels outside of the specified mask to additionally be excluded from the output mask, this can be achieved by providing the -out_masked option.
     * 
     * The four operators available through the "-comparison" option ("lt", "le", "ge" and "gt") correspond to "less-than" (<), "less-than-or-equal" (<=), "greater-than-or-equal" (>=) and "greater-than" (>). This offers fine-grained control over how the thresholding operation will behave in the presence of values equivalent to the threshold. By default, the command will select voxels with values greater than or equal to the determined threshold ("ge"); unless the -bottom option is used, in which case after a threshold is determined from the relevant lowest-valued image voxels, those voxels with values less than or equal to that threshold ("le") are selected. This provides more fine-grained control than the -invert option; the latter is provided for backwards compatibility, but is equivalent to selection of the opposite comparison within this selection.
     * 
     * If no output image path is specified, the command will instead write to standard output the determined threshold value.
     * 
     * References:
     * 
     * * If not using any explicit thresholding mechanism: 
     * Ridgway, G. R.; Omar, R.; Ourselin, S.; Hill, D. L.; Warren, J. D. & Fox, N. C. Issues with threshold masking in voxel-based morphometry of atrophied brains. NeuroImage, 2009, 44, 99-111.
     * 
     * Author: MRTrix3 Developers
     * 
     * URL: https://www.mrtrix.org/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `MrthresholdOutputs`).
     */
    params = execution.params(params)
    const cargs = mrthreshold_cargs(params, execution)
    const ret = mrthreshold_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function mrthreshold(
    input: InputPathType,
    abs: number | null = null,
    percentile: number | null = null,
    top: number | null = null,
    bottom: number | null = null,
    allvolumes: boolean = false,
    ignorezero: boolean = false,
    mask: InputPathType | null = null,
    comparison: string | null = null,
    invert: boolean = false,
    out_masked: boolean = false,
    nan: boolean = false,
    info: boolean = false,
    quiet: boolean = false,
    debug: boolean = false,
    force: boolean = false,
    nthreads: number | null = null,
    config: Array<MrthresholdConfigParameters> | null = null,
    help: boolean = false,
    version: boolean = false,
    output: string | null = null,
    runner: Runner | null = null,
): MrthresholdOutputs {
    /**
     * Create bitwise image by thresholding image intensity.
     * 
     * The threshold value to be applied can be determined in one of a number of ways:
     * 
     * - If no relevant command-line option is used, the command will automatically determine an optimal threshold;
     * 
     * - The -abs option provides the threshold value explicitly;
     * 
     * - The -percentile, -top and -bottom options enable more fine-grained control over how the threshold value is determined.
     * 
     * The -mask option only influences those image values that contribute toward the determination of the threshold value; once the threshold is determined, it is applied to the entire image, irrespective of use of the -mask option. If you wish for the voxels outside of the specified mask to additionally be excluded from the output mask, this can be achieved by providing the -out_masked option.
     * 
     * The four operators available through the "-comparison" option ("lt", "le", "ge" and "gt") correspond to "less-than" (<), "less-than-or-equal" (<=), "greater-than-or-equal" (>=) and "greater-than" (>). This offers fine-grained control over how the thresholding operation will behave in the presence of values equivalent to the threshold. By default, the command will select voxels with values greater than or equal to the determined threshold ("ge"); unless the -bottom option is used, in which case after a threshold is determined from the relevant lowest-valued image voxels, those voxels with values less than or equal to that threshold ("le") are selected. This provides more fine-grained control than the -invert option; the latter is provided for backwards compatibility, but is equivalent to selection of the opposite comparison within this selection.
     * 
     * If no output image path is specified, the command will instead write to standard output the determined threshold value.
     * 
     * References:
     * 
     * * If not using any explicit thresholding mechanism: 
     * Ridgway, G. R.; Omar, R.; Ourselin, S.; Hill, D. L.; Warren, J. D. & Fox, N. C. Issues with threshold masking in voxel-based morphometry of atrophied brains. NeuroImage, 2009, 44, 99-111.
     * 
     * Author: MRTrix3 Developers
     * 
     * URL: https://www.mrtrix.org/
    
     * @param input the input image to be thresholded
     * @param abs specify threshold value as absolute intensity
     * @param percentile determine threshold based on some percentile of the image intensity distribution
     * @param top determine threshold that will result in selection of some number of top-valued voxels
     * @param bottom determine & apply threshold resulting in selection of some number of bottom-valued voxels (note: implies threshold application operator of "le" unless otherwise specified)
     * @param allvolumes compute a single threshold for all image volumes, rather than an individual threshold per volume
     * @param ignorezero ignore zero-valued input values during threshold determination
     * @param mask compute the threshold based only on values within an input mask image
     * @param comparison comparison operator to use when applying the threshold; options are: lt,le,ge,gt (default = "le" for -bottom; "ge" otherwise)
     * @param invert invert the output binary mask (equivalent to flipping the operator; provided for backwards compatibility)
     * @param out_masked mask the output image based on the provided input mask image
     * @param nan set voxels that fail the threshold to NaN rather than zero (output image will be floating-point rather than binary)
     * @param info display information messages.
     * @param quiet do not display information messages or progress status; alternatively, this can be achieved by setting the MRTRIX_QUIET environment variable to a non-empty string.
     * @param debug display debugging messages.
     * @param force force overwrite of output files (caution: using the same file as input and output might cause unexpected behaviour).
     * @param nthreads use this number of threads in multi-threaded applications (set to 0 to disable multi-threading).
     * @param config temporarily set the value of an MRtrix config file entry.
     * @param help display this information page and exit.
     * @param version display version information and exit.
     * @param output the (optional) output binary image mask
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `MrthresholdOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(MRTHRESHOLD_METADATA);
    const params = mrthreshold_params(input, abs, percentile, top, bottom, allvolumes, ignorezero, mask, comparison, invert, out_masked, nan, info, quiet, debug, force, nthreads, config, help, version, output)
    return mrthreshold_execute(params, execution);
}


export {
      MRTHRESHOLD_METADATA,
      MrthresholdConfigParameters,
      MrthresholdOutputs,
      MrthresholdParameters,
      mrthreshold,
      mrthreshold_config_params,
      mrthreshold_params,
};
