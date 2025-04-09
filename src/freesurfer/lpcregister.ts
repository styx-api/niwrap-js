// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const LPCREGISTER_METADATA: Metadata = {
    id: "a83effe70fd200096fd005f862df8be1ea3a7e01.boutiques",
    name: "lpcregister",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface LpcregisterParameters {
    "__STYXTYPE__": "lpcregister";
    "subject_id": string;
    "mov_volume": string;
    "reg_file": string;
    "dof_9": boolean;
    "dof_12": boolean;
    "frame_number"?: number | null | undefined;
    "mid_frame": boolean;
    "fsvol"?: string | null | undefined;
    "output_volume"?: string | null | undefined;
    "tmp_dir"?: string | null | undefined;
    "no_cleanup": boolean;
    "version": boolean;
    "help": boolean;
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
        "lpcregister": lpcregister_cargs,
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
        "lpcregister": lpcregister_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `lpcregister(...)`.
 *
 * @interface
 */
interface LpcregisterOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Output registration file in FreeSurfer format.
     */
    output_reg_file: OutputPathType;
    /**
     * The resampled movable volume if --o is specified.
     */
    resampled_volume: OutputPathType | null;
}


function lpcregister_params(
    subject_id: string,
    mov_volume: string,
    reg_file: string,
    dof_9: boolean = false,
    dof_12: boolean = false,
    frame_number: number | null = null,
    mid_frame: boolean = false,
    fsvol: string | null = null,
    output_volume: string | null = null,
    tmp_dir: string | null = null,
    no_cleanup: boolean = false,
    version: boolean = false,
    help: boolean = false,
): LpcregisterParameters {
    /**
     * Build parameters.
    
     * @param subject_id Subject ID found in SUBJECTS_DIR. The reference volume is the mri/brain volume (modifiable with --fsvol). Converted to analyze using mri_convert.
     * @param mov_volume Volume identifier of the movable volume. Must be specified suitably for mri_convert. Uses first frame unless --frame is specified.
     * @param reg_file Output registration file mapping RAS in the reference to RAS in the movable. The file/matrix format is understood by freesurfer.
     * @param dof_9 Use 9 degrees of freedom; default is 6.
     * @param dof_12 Use 12 degrees of freedom; default is 6.
     * @param frame_number Specify the frame number other than the first. For SPM analyze, specify the file corresponding to the desired frame as each file only has one frame.
     * @param mid_frame Register to the middle frame of the mov volume as the template. Cannot be used with --frame.
     * @param fsvol Use FreeSurfer volume id; default is brainmask.
     * @param output_volume Output volume file for resampled mov.
     * @param tmp_dir Specify temporary directory (implies --nocleanup).
     * @param no_cleanup Do not delete temporary files.
     * @param version Print the version and exit.
     * @param help Print help information and exit.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "lpcregister" as const,
        "subject_id": subject_id,
        "mov_volume": mov_volume,
        "reg_file": reg_file,
        "dof_9": dof_9,
        "dof_12": dof_12,
        "mid_frame": mid_frame,
        "no_cleanup": no_cleanup,
        "version": version,
        "help": help,
    };
    if (frame_number !== null) {
        params["frame_number"] = frame_number;
    }
    if (fsvol !== null) {
        params["fsvol"] = fsvol;
    }
    if (output_volume !== null) {
        params["output_volume"] = output_volume;
    }
    if (tmp_dir !== null) {
        params["tmp_dir"] = tmp_dir;
    }
    return params;
}


function lpcregister_cargs(
    params: LpcregisterParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("lpcregister");
    cargs.push(
        "--s",
        (params["subject_id"] ?? null)
    );
    cargs.push(
        "--mov",
        (params["mov_volume"] ?? null)
    );
    cargs.push(
        "--reg",
        (params["reg_file"] ?? null)
    );
    if ((params["dof_9"] ?? null)) {
        cargs.push("--9");
    }
    if ((params["dof_12"] ?? null)) {
        cargs.push("--12");
    }
    if ((params["frame_number"] ?? null) !== null) {
        cargs.push(
            "--frame",
            String((params["frame_number"] ?? null))
        );
    }
    if ((params["mid_frame"] ?? null)) {
        cargs.push("--mid-frame");
    }
    if ((params["fsvol"] ?? null) !== null) {
        cargs.push(
            "--fsvol",
            (params["fsvol"] ?? null)
        );
    }
    if ((params["output_volume"] ?? null) !== null) {
        cargs.push(
            "--o",
            (params["output_volume"] ?? null)
        );
    }
    if ((params["tmp_dir"] ?? null) !== null) {
        cargs.push(
            "--tmp",
            (params["tmp_dir"] ?? null)
        );
    }
    if ((params["no_cleanup"] ?? null)) {
        cargs.push("--nocleanup");
    }
    if ((params["version"] ?? null)) {
        cargs.push("--version");
    }
    if ((params["help"] ?? null)) {
        cargs.push("--help");
    }
    return cargs;
}


function lpcregister_outputs(
    params: LpcregisterParameters,
    execution: Execution,
): LpcregisterOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: LpcregisterOutputs = {
        root: execution.outputFile("."),
        output_reg_file: execution.outputFile(["register.dat"].join('')),
        resampled_volume: ((params["output_volume"] ?? null) !== null) ? execution.outputFile([(params["output_volume"] ?? null)].join('')) : null,
    };
    return ret;
}


function lpcregister_execute(
    params: LpcregisterParameters,
    execution: Execution,
): LpcregisterOutputs {
    /**
     * Registers a volume to its FreeSurfer anatomical using Local Pearson Correlation (LPC) (the AFNI lpc_align.py program). Creates a FreeSurfer register.dat file.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `LpcregisterOutputs`).
     */
    params = execution.params(params)
    const cargs = lpcregister_cargs(params, execution)
    const ret = lpcregister_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function lpcregister(
    subject_id: string,
    mov_volume: string,
    reg_file: string,
    dof_9: boolean = false,
    dof_12: boolean = false,
    frame_number: number | null = null,
    mid_frame: boolean = false,
    fsvol: string | null = null,
    output_volume: string | null = null,
    tmp_dir: string | null = null,
    no_cleanup: boolean = false,
    version: boolean = false,
    help: boolean = false,
    runner: Runner | null = null,
): LpcregisterOutputs {
    /**
     * Registers a volume to its FreeSurfer anatomical using Local Pearson Correlation (LPC) (the AFNI lpc_align.py program). Creates a FreeSurfer register.dat file.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param subject_id Subject ID found in SUBJECTS_DIR. The reference volume is the mri/brain volume (modifiable with --fsvol). Converted to analyze using mri_convert.
     * @param mov_volume Volume identifier of the movable volume. Must be specified suitably for mri_convert. Uses first frame unless --frame is specified.
     * @param reg_file Output registration file mapping RAS in the reference to RAS in the movable. The file/matrix format is understood by freesurfer.
     * @param dof_9 Use 9 degrees of freedom; default is 6.
     * @param dof_12 Use 12 degrees of freedom; default is 6.
     * @param frame_number Specify the frame number other than the first. For SPM analyze, specify the file corresponding to the desired frame as each file only has one frame.
     * @param mid_frame Register to the middle frame of the mov volume as the template. Cannot be used with --frame.
     * @param fsvol Use FreeSurfer volume id; default is brainmask.
     * @param output_volume Output volume file for resampled mov.
     * @param tmp_dir Specify temporary directory (implies --nocleanup).
     * @param no_cleanup Do not delete temporary files.
     * @param version Print the version and exit.
     * @param help Print help information and exit.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `LpcregisterOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(LPCREGISTER_METADATA);
    const params = lpcregister_params(subject_id, mov_volume, reg_file, dof_9, dof_12, frame_number, mid_frame, fsvol, output_volume, tmp_dir, no_cleanup, version, help)
    return lpcregister_execute(params, execution);
}


export {
      LPCREGISTER_METADATA,
      LpcregisterOutputs,
      LpcregisterParameters,
      lpcregister,
      lpcregister_params,
};
