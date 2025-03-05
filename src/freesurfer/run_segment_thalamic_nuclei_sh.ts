// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const RUN_SEGMENT_THALAMIC_NUCLEI_SH_METADATA: Metadata = {
    id: "58c7623548d514cfc3a6445924c9c49471329b52.boutiques",
    name: "run_SegmentThalamicNuclei.sh",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface RunSegmentThalamicNucleiShParameters {
    "__STYXTYPE__": "run_SegmentThalamicNuclei.sh";
    "mcr_root": string;
    "args"?: Array<string> | null | undefined;
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
        "run_SegmentThalamicNuclei.sh": run_segment_thalamic_nuclei_sh_cargs,
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
 * Output object returned when calling `run_segment_thalamic_nuclei_sh(...)`.
 *
 * @interface
 */
interface RunSegmentThalamicNucleiShOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function run_segment_thalamic_nuclei_sh_params(
    mcr_root: string,
    args: Array<string> | null = null,
): RunSegmentThalamicNucleiShParameters {
    /**
     * Build parameters.
    
     * @param mcr_root The root directory of the deployed MATLAB Compiler Runtime (MCR)
     * @param args Additional arguments for the script
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "run_SegmentThalamicNuclei.sh" as const,
        "mcr_root": mcr_root,
    };
    if (args !== null) {
        params["args"] = args;
    }
    return params;
}


function run_segment_thalamic_nuclei_sh_cargs(
    params: RunSegmentThalamicNucleiShParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("run_SegmentThalamicNuclei.sh");
    cargs.push((params["mcr_root"] ?? null));
    if ((params["args"] ?? null) !== null) {
        cargs.push(...(params["args"] ?? null));
    }
    return cargs;
}


function run_segment_thalamic_nuclei_sh_outputs(
    params: RunSegmentThalamicNucleiShParameters,
    execution: Execution,
): RunSegmentThalamicNucleiShOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: RunSegmentThalamicNucleiShOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function run_segment_thalamic_nuclei_sh_execute(
    params: RunSegmentThalamicNucleiShParameters,
    execution: Execution,
): RunSegmentThalamicNucleiShOutputs {
    /**
     * Script for segmenting thalamic nuclei using FreeSurfer.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `RunSegmentThalamicNucleiShOutputs`).
     */
    params = execution.params(params)
    const cargs = run_segment_thalamic_nuclei_sh_cargs(params, execution)
    const ret = run_segment_thalamic_nuclei_sh_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function run_segment_thalamic_nuclei_sh(
    mcr_root: string,
    args: Array<string> | null = null,
    runner: Runner | null = null,
): RunSegmentThalamicNucleiShOutputs {
    /**
     * Script for segmenting thalamic nuclei using FreeSurfer.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param mcr_root The root directory of the deployed MATLAB Compiler Runtime (MCR)
     * @param args Additional arguments for the script
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `RunSegmentThalamicNucleiShOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(RUN_SEGMENT_THALAMIC_NUCLEI_SH_METADATA);
    const params = run_segment_thalamic_nuclei_sh_params(mcr_root, args)
    return run_segment_thalamic_nuclei_sh_execute(params, execution);
}


export {
      RUN_SEGMENT_THALAMIC_NUCLEI_SH_METADATA,
      RunSegmentThalamicNucleiShOutputs,
      RunSegmentThalamicNucleiShParameters,
      run_segment_thalamic_nuclei_sh,
      run_segment_thalamic_nuclei_sh_params,
};
