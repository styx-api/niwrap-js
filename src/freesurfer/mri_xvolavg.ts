// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const MRI_XVOLAVG_METADATA: Metadata = {
    id: "59e2b553a940c4fdb7f3dcfd7c0ee7148a4cce23.boutiques",
    name: "mri_xvolavg",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface MriXvolavgParameters {
    "__STYXTYPE__": "mri_xvolavg";
    "input_volumes": Array<InputPathType>;
    "vol_type": string;
    "output_volume": string;
    "output_type"?: string | null | undefined;
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
        "mri_xvolavg": mri_xvolavg_cargs,
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
        "mri_xvolavg": mri_xvolavg_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `mri_xvolavg(...)`.
 *
 * @interface
 */
interface MriXvolavgOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * The averaged output volume.
     */
    averaged_output: OutputPathType;
}


function mri_xvolavg_params(
    input_volumes: Array<InputPathType>,
    vol_type: string,
    output_volume: string,
    output_type: string | null = null,
): MriXvolavgParameters {
    /**
     * Build parameters.
    
     * @param input_volumes Path(s) to input volume(s). This option can be repeated for each input volume.
     * @param vol_type Format type of all input volumes.
     * @param output_volume Path to output volume.
     * @param output_type Format type of the output volume (default is that of input volumes).
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "mri_xvolavg" as const,
        "input_volumes": input_volumes,
        "vol_type": vol_type,
        "output_volume": output_volume,
    };
    if (output_type !== null) {
        params["output_type"] = output_type;
    }
    return params;
}


function mri_xvolavg_cargs(
    params: MriXvolavgParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("mri_xvolavg");
    cargs.push(
        "--vol",
        ...(params["input_volumes"] ?? null).map(f => execution.inputFile(f))
    );
    cargs.push(
        "--vol_type",
        (params["vol_type"] ?? null)
    );
    cargs.push(
        "--out",
        (params["output_volume"] ?? null)
    );
    if ((params["output_type"] ?? null) !== null) {
        cargs.push(
            "--out_type",
            (params["output_type"] ?? null)
        );
    }
    return cargs;
}


function mri_xvolavg_outputs(
    params: MriXvolavgParameters,
    execution: Execution,
): MriXvolavgOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: MriXvolavgOutputs = {
        root: execution.outputFile("."),
        averaged_output: execution.outputFile([(params["output_volume"] ?? null)].join('')),
    };
    return ret;
}


function mri_xvolavg_execute(
    params: MriXvolavgParameters,
    execution: Execution,
): MriXvolavgOutputs {
    /**
     * Tool to average multiple volumes together (including 4D volumes).
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `MriXvolavgOutputs`).
     */
    params = execution.params(params)
    const cargs = mri_xvolavg_cargs(params, execution)
    const ret = mri_xvolavg_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function mri_xvolavg(
    input_volumes: Array<InputPathType>,
    vol_type: string,
    output_volume: string,
    output_type: string | null = null,
    runner: Runner | null = null,
): MriXvolavgOutputs {
    /**
     * Tool to average multiple volumes together (including 4D volumes).
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param input_volumes Path(s) to input volume(s). This option can be repeated for each input volume.
     * @param vol_type Format type of all input volumes.
     * @param output_volume Path to output volume.
     * @param output_type Format type of the output volume (default is that of input volumes).
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `MriXvolavgOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(MRI_XVOLAVG_METADATA);
    const params = mri_xvolavg_params(input_volumes, vol_type, output_volume, output_type)
    return mri_xvolavg_execute(params, execution);
}


export {
      MRI_XVOLAVG_METADATA,
      MriXvolavgOutputs,
      MriXvolavgParameters,
      mri_xvolavg,
      mri_xvolavg_params,
};
