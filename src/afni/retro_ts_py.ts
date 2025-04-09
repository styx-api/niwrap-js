// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const RETRO_TS_PY_METADATA: Metadata = {
    id: "79fe337b0aef3f964a4c552f4dbbd2809f5b1792.boutiques",
    name: "RetroTS.py",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface RetroTsPyParameters {
    "__STYXTYPE__": "RetroTS.py";
    "resp_file"?: InputPathType | null | undefined;
    "card_file"?: InputPathType | null | undefined;
    "phys_fs"?: number | null | undefined;
    "num_slices": number;
    "volume_tr": number;
    "phys_file"?: InputPathType | null | undefined;
    "phys_json"?: InputPathType | null | undefined;
    "prefix"?: string | null | undefined;
    "rvt_shifts"?: string | null | undefined;
    "rvt_out": boolean;
    "resp_cutoff_freq"?: number | null | undefined;
    "cardiac_cutoff_freq"?: number | null | undefined;
    "cardiac_out": boolean;
    "respiration_out": boolean;
    "interp_style"?: string | null | undefined;
    "fir_order"?: number | null | undefined;
    "quiet": boolean;
    "demo": boolean;
    "show_graphs": boolean;
    "debug": boolean;
    "slice_offset"?: string | null | undefined;
    "slice_major"?: number | null | undefined;
    "slice_order"?: string | null | undefined;
    "zero_phase_offset": boolean;
    "legacy_transform"?: number | null | undefined;
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
        "RetroTS.py": retro_ts_py_cargs,
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
        "RetroTS.py": retro_ts_py_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `retro_ts_py(...)`.
 *
 * @interface
 */
interface RetroTsPyOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Output file containing respiratory and cardiac regressors
     */
    output_file: OutputPathType | null;
}


function retro_ts_py_params(
    num_slices: number,
    volume_tr: number,
    resp_file: InputPathType | null = null,
    card_file: InputPathType | null = null,
    phys_fs: number | null = null,
    phys_file: InputPathType | null = null,
    phys_json: InputPathType | null = null,
    prefix: string | null = null,
    rvt_shifts: string | null = null,
    rvt_out: boolean = false,
    resp_cutoff_freq: number | null = null,
    cardiac_cutoff_freq: number | null = null,
    cardiac_out: boolean = false,
    respiration_out: boolean = false,
    interp_style: string | null = null,
    fir_order: number | null = null,
    quiet: boolean = false,
    demo: boolean = false,
    show_graphs: boolean = false,
    debug: boolean = false,
    slice_offset: string | null = null,
    slice_major: number | null = null,
    slice_order: string | null = null,
    zero_phase_offset: boolean = false,
    legacy_transform: number | null = null,
): RetroTsPyParameters {
    /**
     * Build parameters.
    
     * @param num_slices Number of slices
     * @param volume_tr Volume TR in seconds
     * @param resp_file Respiration data file
     * @param card_file Cardiac data file
     * @param phys_fs Physiological signal sampling frequency in Hz
     * @param phys_file BIDS formatted physio file in tab-separated format, can be gzipped
     * @param phys_json BIDS formatted physio metadata json file. If not specified, the json corresponding to the phys_file will be loaded.
     * @param prefix Prefix of output file
     * @param rvt_shifts Vector of shifts in seconds of RVT signal. (default is [0:5:20])
     * @param rvt_out Flag for writing RVT regressors (default is 1)
     * @param resp_cutoff_freq Cut-off frequency in Hz for respiratory lowpass filter (default 3 Hz)
     * @param cardiac_cutoff_freq Cut-off frequency in Hz for cardiac lowpass filter (default 3 Hz)
     * @param cardiac_out Flag for writing Cardiac regressors (default is 1)
     * @param respiration_out Flag for writing Respiratory regressors (default is 1)
     * @param interp_style Resampling kernel (default is 'linear')
     * @param fir_order Order of FIR filter (default is 40)
     * @param quiet Show talkative progress as the program runs (default is 1)
     * @param demo Run demonstration of RetroTS (default is 0)
     * @param show_graphs Show graphs (default is unset; set with any parameter to view)
     * @param debug Drop into pdb upon an exception (default is False)
     * @param slice_offset Vector of slice acquisition time offsets in seconds (default is equivalent of alt+z)
     * @param slice_major Unknown parameter (default is 1)
     * @param slice_order Slice timing information in seconds. (default is alt+z)
     * @param zero_phase_offset Zero phase offset flag
     * @param legacy_transform Specify the version of the original Matlab code's transformation (default is 0)
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "RetroTS.py" as const,
        "num_slices": num_slices,
        "volume_tr": volume_tr,
        "rvt_out": rvt_out,
        "cardiac_out": cardiac_out,
        "respiration_out": respiration_out,
        "quiet": quiet,
        "demo": demo,
        "show_graphs": show_graphs,
        "debug": debug,
        "zero_phase_offset": zero_phase_offset,
    };
    if (resp_file !== null) {
        params["resp_file"] = resp_file;
    }
    if (card_file !== null) {
        params["card_file"] = card_file;
    }
    if (phys_fs !== null) {
        params["phys_fs"] = phys_fs;
    }
    if (phys_file !== null) {
        params["phys_file"] = phys_file;
    }
    if (phys_json !== null) {
        params["phys_json"] = phys_json;
    }
    if (prefix !== null) {
        params["prefix"] = prefix;
    }
    if (rvt_shifts !== null) {
        params["rvt_shifts"] = rvt_shifts;
    }
    if (resp_cutoff_freq !== null) {
        params["resp_cutoff_freq"] = resp_cutoff_freq;
    }
    if (cardiac_cutoff_freq !== null) {
        params["cardiac_cutoff_freq"] = cardiac_cutoff_freq;
    }
    if (interp_style !== null) {
        params["interp_style"] = interp_style;
    }
    if (fir_order !== null) {
        params["fir_order"] = fir_order;
    }
    if (slice_offset !== null) {
        params["slice_offset"] = slice_offset;
    }
    if (slice_major !== null) {
        params["slice_major"] = slice_major;
    }
    if (slice_order !== null) {
        params["slice_order"] = slice_order;
    }
    if (legacy_transform !== null) {
        params["legacy_transform"] = legacy_transform;
    }
    return params;
}


function retro_ts_py_cargs(
    params: RetroTsPyParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("RetroTS.py");
    if ((params["resp_file"] ?? null) !== null) {
        cargs.push(
            "-r",
            execution.inputFile((params["resp_file"] ?? null))
        );
    }
    if ((params["card_file"] ?? null) !== null) {
        cargs.push(
            "-c",
            execution.inputFile((params["card_file"] ?? null))
        );
    }
    if ((params["phys_fs"] ?? null) !== null) {
        cargs.push(
            "-p",
            String((params["phys_fs"] ?? null))
        );
    }
    cargs.push(
        "-n",
        String((params["num_slices"] ?? null))
    );
    cargs.push(
        "-v",
        String((params["volume_tr"] ?? null))
    );
    if ((params["phys_file"] ?? null) !== null) {
        cargs.push(
            "-phys_file",
            execution.inputFile((params["phys_file"] ?? null))
        );
    }
    if ((params["phys_json"] ?? null) !== null) {
        cargs.push(
            "-phys_json",
            execution.inputFile((params["phys_json"] ?? null))
        );
    }
    if ((params["prefix"] ?? null) !== null) {
        cargs.push(
            "-prefix",
            (params["prefix"] ?? null)
        );
    }
    if ((params["rvt_shifts"] ?? null) !== null) {
        cargs.push(
            "-rvt_shifts",
            (params["rvt_shifts"] ?? null)
        );
    }
    if ((params["rvt_out"] ?? null)) {
        cargs.push("-rvt_out");
    }
    if ((params["resp_cutoff_freq"] ?? null) !== null) {
        cargs.push(
            "-respiration_cutoff_frequency",
            String((params["resp_cutoff_freq"] ?? null))
        );
    }
    if ((params["cardiac_cutoff_freq"] ?? null) !== null) {
        cargs.push(
            "-cardiac_cutoff_frequency",
            String((params["cardiac_cutoff_freq"] ?? null))
        );
    }
    if ((params["cardiac_out"] ?? null)) {
        cargs.push("-cardiac_out");
    }
    if ((params["respiration_out"] ?? null)) {
        cargs.push("-respiration_out");
    }
    if ((params["interp_style"] ?? null) !== null) {
        cargs.push(
            "-interpolation_style",
            (params["interp_style"] ?? null)
        );
    }
    if ((params["fir_order"] ?? null) !== null) {
        cargs.push(
            "-fir_order",
            String((params["fir_order"] ?? null))
        );
    }
    if ((params["quiet"] ?? null)) {
        cargs.push("-quiet");
    }
    if ((params["demo"] ?? null)) {
        cargs.push("-demo");
    }
    if ((params["show_graphs"] ?? null)) {
        cargs.push("-show_graphs");
    }
    if ((params["debug"] ?? null)) {
        cargs.push("-debug");
    }
    if ((params["slice_offset"] ?? null) !== null) {
        cargs.push(
            "-slice_offset",
            (params["slice_offset"] ?? null)
        );
    }
    if ((params["slice_major"] ?? null) !== null) {
        cargs.push(
            "-slice_major",
            String((params["slice_major"] ?? null))
        );
    }
    if ((params["slice_order"] ?? null) !== null) {
        cargs.push(
            "-slice_order",
            (params["slice_order"] ?? null)
        );
    }
    if ((params["zero_phase_offset"] ?? null)) {
        cargs.push("-zero_phase_offset");
    }
    if ((params["legacy_transform"] ?? null) !== null) {
        cargs.push(
            "-legacy_transform",
            String((params["legacy_transform"] ?? null))
        );
    }
    return cargs;
}


function retro_ts_py_outputs(
    params: RetroTsPyParameters,
    execution: Execution,
): RetroTsPyOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: RetroTsPyOutputs = {
        root: execution.outputFile("."),
        output_file: ((params["prefix"] ?? null) !== null) ? execution.outputFile([(params["prefix"] ?? null), ".slibase.1D"].join('')) : null,
    };
    return ret;
}


function retro_ts_py_execute(
    params: RetroTsPyParameters,
    execution: Execution,
): RetroTsPyOutputs {
    /**
     * Creates slice-based regressors for regressing out components of heart rate, respiration, and respiration volume per time using independent data files or BIDS formatted files.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `RetroTsPyOutputs`).
     */
    params = execution.params(params)
    const cargs = retro_ts_py_cargs(params, execution)
    const ret = retro_ts_py_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function retro_ts_py(
    num_slices: number,
    volume_tr: number,
    resp_file: InputPathType | null = null,
    card_file: InputPathType | null = null,
    phys_fs: number | null = null,
    phys_file: InputPathType | null = null,
    phys_json: InputPathType | null = null,
    prefix: string | null = null,
    rvt_shifts: string | null = null,
    rvt_out: boolean = false,
    resp_cutoff_freq: number | null = null,
    cardiac_cutoff_freq: number | null = null,
    cardiac_out: boolean = false,
    respiration_out: boolean = false,
    interp_style: string | null = null,
    fir_order: number | null = null,
    quiet: boolean = false,
    demo: boolean = false,
    show_graphs: boolean = false,
    debug: boolean = false,
    slice_offset: string | null = null,
    slice_major: number | null = null,
    slice_order: string | null = null,
    zero_phase_offset: boolean = false,
    legacy_transform: number | null = null,
    runner: Runner | null = null,
): RetroTsPyOutputs {
    /**
     * Creates slice-based regressors for regressing out components of heart rate, respiration, and respiration volume per time using independent data files or BIDS formatted files.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param num_slices Number of slices
     * @param volume_tr Volume TR in seconds
     * @param resp_file Respiration data file
     * @param card_file Cardiac data file
     * @param phys_fs Physiological signal sampling frequency in Hz
     * @param phys_file BIDS formatted physio file in tab-separated format, can be gzipped
     * @param phys_json BIDS formatted physio metadata json file. If not specified, the json corresponding to the phys_file will be loaded.
     * @param prefix Prefix of output file
     * @param rvt_shifts Vector of shifts in seconds of RVT signal. (default is [0:5:20])
     * @param rvt_out Flag for writing RVT regressors (default is 1)
     * @param resp_cutoff_freq Cut-off frequency in Hz for respiratory lowpass filter (default 3 Hz)
     * @param cardiac_cutoff_freq Cut-off frequency in Hz for cardiac lowpass filter (default 3 Hz)
     * @param cardiac_out Flag for writing Cardiac regressors (default is 1)
     * @param respiration_out Flag for writing Respiratory regressors (default is 1)
     * @param interp_style Resampling kernel (default is 'linear')
     * @param fir_order Order of FIR filter (default is 40)
     * @param quiet Show talkative progress as the program runs (default is 1)
     * @param demo Run demonstration of RetroTS (default is 0)
     * @param show_graphs Show graphs (default is unset; set with any parameter to view)
     * @param debug Drop into pdb upon an exception (default is False)
     * @param slice_offset Vector of slice acquisition time offsets in seconds (default is equivalent of alt+z)
     * @param slice_major Unknown parameter (default is 1)
     * @param slice_order Slice timing information in seconds. (default is alt+z)
     * @param zero_phase_offset Zero phase offset flag
     * @param legacy_transform Specify the version of the original Matlab code's transformation (default is 0)
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `RetroTsPyOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(RETRO_TS_PY_METADATA);
    const params = retro_ts_py_params(num_slices, volume_tr, resp_file, card_file, phys_fs, phys_file, phys_json, prefix, rvt_shifts, rvt_out, resp_cutoff_freq, cardiac_cutoff_freq, cardiac_out, respiration_out, interp_style, fir_order, quiet, demo, show_graphs, debug, slice_offset, slice_major, slice_order, zero_phase_offset, legacy_transform)
    return retro_ts_py_execute(params, execution);
}


export {
      RETRO_TS_PY_METADATA,
      RetroTsPyOutputs,
      RetroTsPyParameters,
      retro_ts_py,
      retro_ts_py_params,
};
