// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const SAMSEG_LONG_METADATA: Metadata = {
    id: "765b3bcdab2d7c42a40957c0344f10707c49df51.boutiques",
    name: "samseg-long",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface SamsegLongParameters {
    "__STYXTYPE__": "samseg-long";
    "output_dir": string;
    "input_files": Array<InputPathType>;
    "align_mc": boolean;
    "align_no_mc": boolean;
    "threads"?: number | null | undefined;
    "save_posteriors": boolean;
    "force_update": boolean;
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
        "samseg-long": samseg_long_cargs,
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
        "samseg-long": samseg_long_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `samseg_long(...)`.
 *
 * @interface
 */
interface SamsegLongOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Samseg output folder for the first time point.
     */
    tp001_output: OutputPathType;
    /**
     * Samseg output folder for the second time point.
     */
    tp002_output: OutputPathType;
    /**
     * Base folder created by the samseg-long process.
     */
    base_output: OutputPathType;
}


function samseg_long_params(
    output_dir: string,
    input_files: Array<InputPathType>,
    align_mc: boolean = false,
    align_no_mc: boolean = false,
    threads: number | null = null,
    save_posteriors: boolean = false,
    force_update: boolean = false,
): SamsegLongParameters {
    /**
     * Build parameters.
    
     * @param output_dir Output directory.
     * @param input_files Input image files. All inputs must be a single modality.
     * @param align_mc Align all inputs using robust register.
     * @param align_no_mc Do not align inputs using robust register.
     * @param threads Number of threads to use.
     * @param save_posteriors Save posterior probabilities.
     * @param force_update Force update of outputs.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "samseg-long" as const,
        "output_dir": output_dir,
        "input_files": input_files,
        "align_mc": align_mc,
        "align_no_mc": align_no_mc,
        "save_posteriors": save_posteriors,
        "force_update": force_update,
    };
    if (threads !== null) {
        params["threads"] = threads;
    }
    return params;
}


function samseg_long_cargs(
    params: SamsegLongParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("samseg-long");
    cargs.push(
        "--o",
        (params["output_dir"] ?? null)
    );
    cargs.push(
        "--i",
        ...(params["input_files"] ?? null).map(f => execution.inputFile(f))
    );
    if ((params["align_mc"] ?? null)) {
        cargs.push("--mc");
    }
    if ((params["align_no_mc"] ?? null)) {
        cargs.push("--no-mc");
    }
    if ((params["threads"] ?? null) !== null) {
        cargs.push(
            "--threads",
            String((params["threads"] ?? null))
        );
    }
    if ((params["save_posteriors"] ?? null)) {
        cargs.push("--save-posteriors");
    }
    if ((params["force_update"] ?? null)) {
        cargs.push("--force-update");
    }
    return cargs;
}


function samseg_long_outputs(
    params: SamsegLongParameters,
    execution: Execution,
): SamsegLongOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: SamsegLongOutputs = {
        root: execution.outputFile("."),
        tp001_output: execution.outputFile([(params["output_dir"] ?? null), "/tp001"].join('')),
        tp002_output: execution.outputFile([(params["output_dir"] ?? null), "/tp002"].join('')),
        base_output: execution.outputFile([(params["output_dir"] ?? null), "/base"].join('')),
    };
    return ret;
}


function samseg_long_execute(
    params: SamsegLongParameters,
    execution: Execution,
): SamsegLongOutputs {
    /**
     * Longitudinal analysis tool using SAMSEG in FreeSurfer.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `SamsegLongOutputs`).
     */
    params = execution.params(params)
    const cargs = samseg_long_cargs(params, execution)
    const ret = samseg_long_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function samseg_long(
    output_dir: string,
    input_files: Array<InputPathType>,
    align_mc: boolean = false,
    align_no_mc: boolean = false,
    threads: number | null = null,
    save_posteriors: boolean = false,
    force_update: boolean = false,
    runner: Runner | null = null,
): SamsegLongOutputs {
    /**
     * Longitudinal analysis tool using SAMSEG in FreeSurfer.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param output_dir Output directory.
     * @param input_files Input image files. All inputs must be a single modality.
     * @param align_mc Align all inputs using robust register.
     * @param align_no_mc Do not align inputs using robust register.
     * @param threads Number of threads to use.
     * @param save_posteriors Save posterior probabilities.
     * @param force_update Force update of outputs.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `SamsegLongOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(SAMSEG_LONG_METADATA);
    const params = samseg_long_params(output_dir, input_files, align_mc, align_no_mc, threads, save_posteriors, force_update)
    return samseg_long_execute(params, execution);
}


export {
      SAMSEG_LONG_METADATA,
      SamsegLongOutputs,
      SamsegLongParameters,
      samseg_long,
      samseg_long_params,
};
