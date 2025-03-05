// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const TIMING_TOOL_PY_METADATA: Metadata = {
    id: "e72448a163610156059a44280593b8076536b24a.boutiques",
    name: "timing_tool.py",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface TimingToolPyParameters {
    "__STYXTYPE__": "timing_tool.py";
    "timing_file"?: InputPathType | null | undefined;
    "output_file"?: string | null | undefined;
    "run_length"?: Array<number> | null | undefined;
    "tr"?: number | null | undefined;
    "offset"?: number | null | undefined;
    "extend_file"?: InputPathType | null | undefined;
    "sort": boolean;
    "scale_data"?: number | null | undefined;
    "shift_to_run_offset"?: number | null | undefined;
    "timing_to_1D_file"?: string | null | undefined;
    "stim_duration"?: number | null | undefined;
    "multi_timing_files"?: Array<InputPathType> | null | undefined;
    "multi_show_isi_stats": boolean;
    "multi_show_timing": boolean;
    "show_timing": boolean;
    "multi_stim_duration"?: Array<number> | null | undefined;
    "round_times_frac"?: number | null | undefined;
    "truncate_times": boolean;
    "multi_timing_event_list"?: string | null | undefined;
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
        "timing_tool.py": timing_tool_py_cargs,
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
        "timing_tool.py": timing_tool_py_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `timing_tool_py(...)`.
 *
 * @interface
 */
interface TimingToolPyOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Output timing file as specified
     */
    output_timing_file: OutputPathType | null;
    /**
     * Output 1D formatted stimulus data
     */
    timing_to_1_d_output: OutputPathType | null;
}


function timing_tool_py_params(
    timing_file: InputPathType | null = null,
    output_file: string | null = null,
    run_length: Array<number> | null = null,
    tr: number | null = null,
    offset: number | null = null,
    extend_file: InputPathType | null = null,
    sort: boolean = false,
    scale_data: number | null = null,
    shift_to_run_offset: number | null = null,
    timing_to_1_d_file: string | null = null,
    stim_duration: number | null = null,
    multi_timing_files: Array<InputPathType> | null = null,
    multi_show_isi_stats: boolean = false,
    multi_show_timing: boolean = false,
    show_timing: boolean = false,
    multi_stim_duration: Array<number> | null = null,
    round_times_frac: number | null = null,
    truncate_times: boolean = false,
    multi_timing_event_list: string | null = null,
): TimingToolPyParameters {
    /**
     * Build parameters.
    
     * @param timing_file Specify a stimulus timing file to load
     * @param output_file Specify the output timing file
     * @param run_length Specify the run duration(s), in seconds
     * @param tr Specify the time resolution in 1D output (in seconds)
     * @param offset Add OFFSET to every time in the main element
     * @param extend_file Extend timing rows with those in NEW_FILE
     * @param sort Sort the times, per row (run)
     * @param scale_data Multiply every stim time by SCALAR
     * @param shift_to_run_offset Shift times so first event is at start of run
     * @param timing_to_1_d_file Convert stim_times format to stim_file
     * @param stim_duration Specify the stimulus duration, in seconds
     * @param multi_timing_files Specify multiple timing files to load
     * @param multi_show_isi_stats Display timing and ISI statistics for the multiple timing files
     * @param multi_show_timing Display info on multiple timing elements
     * @param show_timing Display info on the main timing element
     * @param multi_stim_duration Specify stimulus duration(s), in seconds, for multiple timing elements
     * @param round_times_frac Round times to multiples of the TR (0.0 <= FRAC <= 1.0)
     * @param truncate_times Truncate times to multiples of the TR
     * @param multi_timing_event_list Create an event list file from multiple timing files
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "timing_tool.py" as const,
        "sort": sort,
        "multi_show_isi_stats": multi_show_isi_stats,
        "multi_show_timing": multi_show_timing,
        "show_timing": show_timing,
        "truncate_times": truncate_times,
    };
    if (timing_file !== null) {
        params["timing_file"] = timing_file;
    }
    if (output_file !== null) {
        params["output_file"] = output_file;
    }
    if (run_length !== null) {
        params["run_length"] = run_length;
    }
    if (tr !== null) {
        params["tr"] = tr;
    }
    if (offset !== null) {
        params["offset"] = offset;
    }
    if (extend_file !== null) {
        params["extend_file"] = extend_file;
    }
    if (scale_data !== null) {
        params["scale_data"] = scale_data;
    }
    if (shift_to_run_offset !== null) {
        params["shift_to_run_offset"] = shift_to_run_offset;
    }
    if (timing_to_1_d_file !== null) {
        params["timing_to_1D_file"] = timing_to_1_d_file;
    }
    if (stim_duration !== null) {
        params["stim_duration"] = stim_duration;
    }
    if (multi_timing_files !== null) {
        params["multi_timing_files"] = multi_timing_files;
    }
    if (multi_stim_duration !== null) {
        params["multi_stim_duration"] = multi_stim_duration;
    }
    if (round_times_frac !== null) {
        params["round_times_frac"] = round_times_frac;
    }
    if (multi_timing_event_list !== null) {
        params["multi_timing_event_list"] = multi_timing_event_list;
    }
    return params;
}


function timing_tool_py_cargs(
    params: TimingToolPyParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("timing_tool.py");
    if ((params["timing_file"] ?? null) !== null) {
        cargs.push(
            "-timing",
            execution.inputFile((params["timing_file"] ?? null))
        );
    }
    if ((params["output_file"] ?? null) !== null) {
        cargs.push(
            "-write_timing",
            (params["output_file"] ?? null)
        );
    }
    if ((params["run_length"] ?? null) !== null) {
        cargs.push(
            "-run_len",
            ...(params["run_length"] ?? null).map(String)
        );
    }
    if ((params["tr"] ?? null) !== null) {
        cargs.push(
            "-tr",
            String((params["tr"] ?? null))
        );
    }
    if ((params["offset"] ?? null) !== null) {
        cargs.push(
            "-add_offset",
            String((params["offset"] ?? null))
        );
    }
    if ((params["extend_file"] ?? null) !== null) {
        cargs.push(
            "-extend",
            execution.inputFile((params["extend_file"] ?? null))
        );
    }
    if ((params["sort"] ?? null)) {
        cargs.push("-sort");
    }
    if ((params["scale_data"] ?? null) !== null) {
        cargs.push(
            "-scale_data",
            String((params["scale_data"] ?? null))
        );
    }
    if ((params["shift_to_run_offset"] ?? null) !== null) {
        cargs.push(
            "-shift_to_run_offset",
            String((params["shift_to_run_offset"] ?? null))
        );
    }
    if ((params["timing_to_1D_file"] ?? null) !== null) {
        cargs.push(
            "-timing_to_1D",
            (params["timing_to_1D_file"] ?? null)
        );
    }
    if ((params["stim_duration"] ?? null) !== null) {
        cargs.push(
            "-stim_dur",
            String((params["stim_duration"] ?? null))
        );
    }
    if ((params["multi_timing_files"] ?? null) !== null) {
        cargs.push(
            "-multi_timing",
            ...(params["multi_timing_files"] ?? null).map(f => execution.inputFile(f))
        );
    }
    if ((params["multi_show_isi_stats"] ?? null)) {
        cargs.push("-multi_show_isi_stats");
    }
    if ((params["multi_show_timing"] ?? null)) {
        cargs.push("-multi_show_timing_ele");
    }
    if ((params["show_timing"] ?? null)) {
        cargs.push("-show_timing_ele");
    }
    if ((params["multi_stim_duration"] ?? null) !== null) {
        cargs.push(
            "-multi_stim_dur",
            ...(params["multi_stim_duration"] ?? null).map(String)
        );
    }
    if ((params["round_times_frac"] ?? null) !== null) {
        cargs.push(
            "-round_times",
            String((params["round_times_frac"] ?? null))
        );
    }
    if ((params["truncate_times"] ?? null)) {
        cargs.push("-truncate_times");
    }
    if ((params["multi_timing_event_list"] ?? null) !== null) {
        cargs.push(
            "-multi_timing_to_event_list",
            (params["multi_timing_event_list"] ?? null)
        );
    }
    return cargs;
}


function timing_tool_py_outputs(
    params: TimingToolPyParameters,
    execution: Execution,
): TimingToolPyOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: TimingToolPyOutputs = {
        root: execution.outputFile("."),
        output_timing_file: ((params["output_file"] ?? null) !== null) ? execution.outputFile([(params["output_file"] ?? null)].join('')) : null,
        timing_to_1_d_output: ((params["timing_to_1D_file"] ?? null) !== null) ? execution.outputFile([(params["timing_to_1D_file"] ?? null)].join('')) : null,
    };
    return ret;
}


function timing_tool_py_execute(
    params: TimingToolPyParameters,
    execution: Execution,
): TimingToolPyOutputs {
    /**
     * Tool for manipulating and evaluating stimulus timing files.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `TimingToolPyOutputs`).
     */
    params = execution.params(params)
    const cargs = timing_tool_py_cargs(params, execution)
    const ret = timing_tool_py_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function timing_tool_py(
    timing_file: InputPathType | null = null,
    output_file: string | null = null,
    run_length: Array<number> | null = null,
    tr: number | null = null,
    offset: number | null = null,
    extend_file: InputPathType | null = null,
    sort: boolean = false,
    scale_data: number | null = null,
    shift_to_run_offset: number | null = null,
    timing_to_1_d_file: string | null = null,
    stim_duration: number | null = null,
    multi_timing_files: Array<InputPathType> | null = null,
    multi_show_isi_stats: boolean = false,
    multi_show_timing: boolean = false,
    show_timing: boolean = false,
    multi_stim_duration: Array<number> | null = null,
    round_times_frac: number | null = null,
    truncate_times: boolean = false,
    multi_timing_event_list: string | null = null,
    runner: Runner | null = null,
): TimingToolPyOutputs {
    /**
     * Tool for manipulating and evaluating stimulus timing files.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param timing_file Specify a stimulus timing file to load
     * @param output_file Specify the output timing file
     * @param run_length Specify the run duration(s), in seconds
     * @param tr Specify the time resolution in 1D output (in seconds)
     * @param offset Add OFFSET to every time in the main element
     * @param extend_file Extend timing rows with those in NEW_FILE
     * @param sort Sort the times, per row (run)
     * @param scale_data Multiply every stim time by SCALAR
     * @param shift_to_run_offset Shift times so first event is at start of run
     * @param timing_to_1_d_file Convert stim_times format to stim_file
     * @param stim_duration Specify the stimulus duration, in seconds
     * @param multi_timing_files Specify multiple timing files to load
     * @param multi_show_isi_stats Display timing and ISI statistics for the multiple timing files
     * @param multi_show_timing Display info on multiple timing elements
     * @param show_timing Display info on the main timing element
     * @param multi_stim_duration Specify stimulus duration(s), in seconds, for multiple timing elements
     * @param round_times_frac Round times to multiples of the TR (0.0 <= FRAC <= 1.0)
     * @param truncate_times Truncate times to multiples of the TR
     * @param multi_timing_event_list Create an event list file from multiple timing files
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `TimingToolPyOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(TIMING_TOOL_PY_METADATA);
    const params = timing_tool_py_params(timing_file, output_file, run_length, tr, offset, extend_file, sort, scale_data, shift_to_run_offset, timing_to_1_d_file, stim_duration, multi_timing_files, multi_show_isi_stats, multi_show_timing, show_timing, multi_stim_duration, round_times_frac, truncate_times, multi_timing_event_list)
    return timing_tool_py_execute(params, execution);
}


export {
      TIMING_TOOL_PY_METADATA,
      TimingToolPyOutputs,
      TimingToolPyParameters,
      timing_tool_py,
      timing_tool_py_params,
};
