// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const HISTO_REGISTER_BLOCK_METADATA: Metadata = {
    id: "1572900c1097b5f831c522fde78dfc03b4370b94.boutiques",
    name: "histo_register_block",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface HistoRegisterBlockParameters {
    "__STYXTYPE__": "histo_register_block";
    "seg_time1": InputPathType;
    "seg_time2": InputPathType;
    "transform1": InputPathType;
    "transform2": InputPathType;
    "output_file": string;
    "out_like"?: InputPathType | null | undefined;
    "invert_transform": boolean;
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
        "histo_register_block": histo_register_block_cargs,
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
        "histo_register_block": histo_register_block_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `histo_register_block(...)`.
 *
 * @interface
 */
interface HistoRegisterBlockOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Aligned output file
     */
    aligned_output: OutputPathType;
}


function histo_register_block_params(
    seg_time1: InputPathType,
    seg_time2: InputPathType,
    transform1: InputPathType,
    transform2: InputPathType,
    output_file: string,
    out_like: InputPathType | null = null,
    invert_transform: boolean = false,
): HistoRegisterBlockParameters {
    /**
     * Build parameters.
    
     * @param seg_time1 Segmented image at time point 1
     * @param seg_time2 Segmented image at time point 2
     * @param transform1 Transformation file for time point 1
     * @param transform2 Transformation file for time point 2
     * @param output_file Output file name for the aligned image
     * @param out_like Set output volume parameters like the reference volume
     * @param invert_transform Invert transform coordinates
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "histo_register_block" as const,
        "seg_time1": seg_time1,
        "seg_time2": seg_time2,
        "transform1": transform1,
        "transform2": transform2,
        "output_file": output_file,
        "invert_transform": invert_transform,
    };
    if (out_like !== null) {
        params["out_like"] = out_like;
    }
    return params;
}


function histo_register_block_cargs(
    params: HistoRegisterBlockParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("histo_register_block");
    cargs.push(execution.inputFile((params["seg_time1"] ?? null)));
    cargs.push(execution.inputFile((params["seg_time2"] ?? null)));
    cargs.push(execution.inputFile((params["transform1"] ?? null)));
    cargs.push(execution.inputFile((params["transform2"] ?? null)));
    cargs.push((params["output_file"] ?? null));
    if ((params["out_like"] ?? null) !== null) {
        cargs.push(
            "-out_like",
            execution.inputFile((params["out_like"] ?? null))
        );
    }
    if ((params["invert_transform"] ?? null)) {
        cargs.push("-I");
    }
    return cargs;
}


function histo_register_block_outputs(
    params: HistoRegisterBlockParameters,
    execution: Execution,
): HistoRegisterBlockOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: HistoRegisterBlockOutputs = {
        root: execution.outputFile("."),
        aligned_output: execution.outputFile([(params["output_file"] ?? null)].join('')),
    };
    return ret;
}


function histo_register_block_execute(
    params: HistoRegisterBlockParameters,
    execution: Execution,
): HistoRegisterBlockOutputs {
    /**
     * A tool to align a histological slice with a block face image.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `HistoRegisterBlockOutputs`).
     */
    params = execution.params(params)
    const cargs = histo_register_block_cargs(params, execution)
    const ret = histo_register_block_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function histo_register_block(
    seg_time1: InputPathType,
    seg_time2: InputPathType,
    transform1: InputPathType,
    transform2: InputPathType,
    output_file: string,
    out_like: InputPathType | null = null,
    invert_transform: boolean = false,
    runner: Runner | null = null,
): HistoRegisterBlockOutputs {
    /**
     * A tool to align a histological slice with a block face image.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param seg_time1 Segmented image at time point 1
     * @param seg_time2 Segmented image at time point 2
     * @param transform1 Transformation file for time point 1
     * @param transform2 Transformation file for time point 2
     * @param output_file Output file name for the aligned image
     * @param out_like Set output volume parameters like the reference volume
     * @param invert_transform Invert transform coordinates
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `HistoRegisterBlockOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(HISTO_REGISTER_BLOCK_METADATA);
    const params = histo_register_block_params(seg_time1, seg_time2, transform1, transform2, output_file, out_like, invert_transform)
    return histo_register_block_execute(params, execution);
}


export {
      HISTO_REGISTER_BLOCK_METADATA,
      HistoRegisterBlockOutputs,
      HistoRegisterBlockParameters,
      histo_register_block,
      histo_register_block_params,
};
