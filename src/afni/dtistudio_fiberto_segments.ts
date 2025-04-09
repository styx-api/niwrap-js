// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const DTISTUDIO_FIBERTO_SEGMENTS_METADATA: Metadata = {
    id: "7b645090f91e42ee064699f7e346fa9a87d9da30.boutiques",
    name: "DTIStudioFibertoSegments",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface DtistudioFibertoSegmentsParameters {
    "__STYXTYPE__": "DTIStudioFibertoSegments";
    "dataset": InputPathType;
    "output_file"?: string | null | undefined;
    "swap_flag": boolean;
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
        "DTIStudioFibertoSegments": dtistudio_fiberto_segments_cargs,
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
        "DTIStudioFibertoSegments": dtistudio_fiberto_segments_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `dtistudio_fiberto_segments(...)`.
 *
 * @interface
 */
interface DtistudioFibertoSegmentsOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Output SUMA segment file
     */
    output_segment_file: OutputPathType | null;
}


function dtistudio_fiberto_segments_params(
    dataset: InputPathType,
    output_file: string | null = null,
    swap_flag: boolean = false,
): DtistudioFibertoSegmentsParameters {
    /**
     * Build parameters.
    
     * @param dataset Input dataset file
     * @param output_file Name of the output file (default is rawxyzseg.dat)
     * @param swap_flag Swap bytes in data
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "DTIStudioFibertoSegments" as const,
        "dataset": dataset,
        "swap_flag": swap_flag,
    };
    if (output_file !== null) {
        params["output_file"] = output_file;
    }
    return params;
}


function dtistudio_fiberto_segments_cargs(
    params: DtistudioFibertoSegmentsParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("DTIStudioFibertoSegments");
    cargs.push(execution.inputFile((params["dataset"] ?? null)));
    if ((params["output_file"] ?? null) !== null) {
        cargs.push(
            "-output",
            (params["output_file"] ?? null)
        );
    }
    if ((params["swap_flag"] ?? null)) {
        cargs.push("-swap");
    }
    return cargs;
}


function dtistudio_fiberto_segments_outputs(
    params: DtistudioFibertoSegmentsParameters,
    execution: Execution,
): DtistudioFibertoSegmentsOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: DtistudioFibertoSegmentsOutputs = {
        root: execution.outputFile("."),
        output_segment_file: ((params["output_file"] ?? null) !== null) ? execution.outputFile([(params["output_file"] ?? null)].join('')) : null,
    };
    return ret;
}


function dtistudio_fiberto_segments_execute(
    params: DtistudioFibertoSegmentsParameters,
    execution: Execution,
): DtistudioFibertoSegmentsOutputs {
    /**
     * Convert a DTIStudio Fiber file to a SUMA segment file.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `DtistudioFibertoSegmentsOutputs`).
     */
    params = execution.params(params)
    const cargs = dtistudio_fiberto_segments_cargs(params, execution)
    const ret = dtistudio_fiberto_segments_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function dtistudio_fiberto_segments(
    dataset: InputPathType,
    output_file: string | null = null,
    swap_flag: boolean = false,
    runner: Runner | null = null,
): DtistudioFibertoSegmentsOutputs {
    /**
     * Convert a DTIStudio Fiber file to a SUMA segment file.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param dataset Input dataset file
     * @param output_file Name of the output file (default is rawxyzseg.dat)
     * @param swap_flag Swap bytes in data
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `DtistudioFibertoSegmentsOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(DTISTUDIO_FIBERTO_SEGMENTS_METADATA);
    const params = dtistudio_fiberto_segments_params(dataset, output_file, swap_flag)
    return dtistudio_fiberto_segments_execute(params, execution);
}


export {
      DTISTUDIO_FIBERTO_SEGMENTS_METADATA,
      DtistudioFibertoSegmentsOutputs,
      DtistudioFibertoSegmentsParameters,
      dtistudio_fiberto_segments,
      dtistudio_fiberto_segments_params,
};
