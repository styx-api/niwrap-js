// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const SIENA_CAL_METADATA: Metadata = {
    id: "b53c1eae8f14da0f80dcdb3e52fdf35ef7db733f.boutiques",
    name: "siena_cal",
    package: "fsl",
    container_image_tag: "brainlife/fsl:6.0.4-patched2",
};


interface SienaCalParameters {
    "__STYXTYPE__": "siena_cal";
    "input1_file": InputPathType;
    "input2_file": InputPathType;
    "scale": number;
    "siena_diff_options"?: string | null | undefined;
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
        "siena_cal": siena_cal_cargs,
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
        "siena_cal": siena_cal_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `siena_cal(...)`.
 *
 * @interface
 */
interface SienaCalOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Output directory containing SIENA results
     */
    output_dir: OutputPathType;
}


function siena_cal_params(
    input1_file: InputPathType,
    input2_file: InputPathType,
    scale: number,
    siena_diff_options: string | null = null,
): SienaCalParameters {
    /**
     * Build parameters.
    
     * @param input1_file First input image file root (e.g., baseline image root).
     * @param input2_file Second input image file root (e.g., follow-up image root).
     * @param scale Voxel size scaling factor.
     * @param siena_diff_options Optional SIENA difference options.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "siena_cal" as const,
        "input1_file": input1_file,
        "input2_file": input2_file,
        "scale": scale,
    };
    if (siena_diff_options !== null) {
        params["siena_diff_options"] = siena_diff_options;
    }
    return params;
}


function siena_cal_cargs(
    params: SienaCalParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("siena_cal");
    cargs.push(execution.inputFile((params["input1_file"] ?? null)));
    cargs.push(execution.inputFile((params["input2_file"] ?? null)));
    cargs.push(String((params["scale"] ?? null)));
    if ((params["siena_diff_options"] ?? null) !== null) {
        cargs.push((params["siena_diff_options"] ?? null));
    }
    return cargs;
}


function siena_cal_outputs(
    params: SienaCalParameters,
    execution: Execution,
): SienaCalOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: SienaCalOutputs = {
        root: execution.outputFile("."),
        output_dir: execution.outputFile([path.basename((params["input1_file"] ?? null)), "_to_", path.basename((params["input2_file"] ?? null)), "_siena"].join('')),
    };
    return ret;
}


function siena_cal_execute(
    params: SienaCalParameters,
    execution: Execution,
): SienaCalOutputs {
    /**
     * SIENA is part of FSL (FMRIB Software Library), which performs a two-timepoint brain volume change analysis.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `SienaCalOutputs`).
     */
    params = execution.params(params)
    const cargs = siena_cal_cargs(params, execution)
    const ret = siena_cal_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function siena_cal(
    input1_file: InputPathType,
    input2_file: InputPathType,
    scale: number,
    siena_diff_options: string | null = null,
    runner: Runner | null = null,
): SienaCalOutputs {
    /**
     * SIENA is part of FSL (FMRIB Software Library), which performs a two-timepoint brain volume change analysis.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param input1_file First input image file root (e.g., baseline image root).
     * @param input2_file Second input image file root (e.g., follow-up image root).
     * @param scale Voxel size scaling factor.
     * @param siena_diff_options Optional SIENA difference options.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `SienaCalOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(SIENA_CAL_METADATA);
    const params = siena_cal_params(input1_file, input2_file, scale, siena_diff_options)
    return siena_cal_execute(params, execution);
}


export {
      SIENA_CAL_METADATA,
      SienaCalOutputs,
      SienaCalParameters,
      siena_cal,
      siena_cal_params,
};
