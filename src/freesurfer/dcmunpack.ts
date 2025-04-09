// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const DCMUNPACK_METADATA: Metadata = {
    id: "64a19ab70f6129ad53152ddeab602e5432759bab.boutiques",
    name: "dcmunpack",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface DcmunpackParameters {
    "__STYXTYPE__": "dcmunpack";
    "src": string;
    "targ"?: string | null | undefined;
    "run"?: string | null | undefined;
    "auto_runseq"?: string | null | undefined;
    "keep_scouts": boolean;
    "scanonly"?: string | null | undefined;
    "one_per_dir": boolean;
    "ext"?: string | null | undefined;
    "pre"?: string | null | undefined;
    "pat"?: string | null | undefined;
    "no_infodump": boolean;
    "generic": boolean;
    "copy_only": boolean;
    "no_convert": boolean;
    "force_update": boolean;
    "max": boolean;
    "base": boolean;
    "key_string"?: string | null | undefined;
    "index_out"?: string | null | undefined;
    "index_in"?: string | null | undefined;
    "it_dicom": boolean;
    "no_exit_on_error": boolean;
    "run_skip"?: string | null | undefined;
    "no_rescale_dicom": boolean;
    "rescale_dicom": boolean;
    "no_dwi": boolean;
    "iid"?: Array<number> | null | undefined;
    "ijd"?: Array<number> | null | undefined;
    "ikd"?: Array<number> | null | undefined;
    "extra_info": boolean;
    "first_dicom": boolean;
    "no_dcm2niix": boolean;
    "phase": boolean;
    "fips"?: string | null | undefined;
    "fips_run"?: string | null | undefined;
    "xml_only": boolean;
    "log"?: string | null | undefined;
    "debug": boolean;
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
        "dcmunpack": dcmunpack_cargs,
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
 * Output object returned when calling `dcmunpack(...)`.
 *
 * @interface
 */
interface DcmunpackOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function dcmunpack_params(
    src: string,
    targ: string | null = null,
    run: string | null = null,
    auto_runseq: string | null = null,
    keep_scouts: boolean = false,
    scanonly: string | null = null,
    one_per_dir: boolean = false,
    ext: string | null = null,
    pre: string | null = null,
    pat: string | null = null,
    no_infodump: boolean = false,
    generic: boolean = false,
    copy_only: boolean = false,
    no_convert: boolean = false,
    force_update: boolean = false,
    max: boolean = false,
    base: boolean = false,
    key_string: string | null = null,
    index_out: string | null = null,
    index_in: string | null = null,
    it_dicom: boolean = false,
    no_exit_on_error: boolean = false,
    run_skip: string | null = null,
    no_rescale_dicom: boolean = false,
    rescale_dicom: boolean = false,
    no_dwi: boolean = false,
    iid: Array<number> | null = null,
    ijd: Array<number> | null = null,
    ikd: Array<number> | null = null,
    extra_info: boolean = false,
    first_dicom: boolean = false,
    no_dcm2niix: boolean = false,
    phase: boolean = false,
    fips: string | null = null,
    fips_run: string | null = null,
    xml_only: boolean = false,
    log: string | null = null,
    debug: boolean = false,
): DcmunpackParameters {
    /**
     * Build parameters.
    
     * @param src Dicom source directory. You can specify more than one.
     * @param targ Output directory. Do not need to include when just getting information about what is in the directory.
     * @param run Specify unpacking rules for a given run (series). Eg, "-run 3 bold nii f.nii".
     * @param auto_runseq Save all scans in the targetdir as runo.seqname.format.
     * @param keep_scouts Unpack series with 'scout' or 'setter' in the name.
     * @param scanonly Only scan the directory and put result in file.
     * @param one_per_dir Assume that there is only one dicom series in each subdir.
     * @param ext Input extension (eg, dcm).
     * @param pre Input prefix (i.e., input file name init string).
     * @param pat Input pattern (i.e., string that occurs in the middle of file name).
     * @param no_infodump Do not create the fname-infodump.dat file.
     * @param generic Do not use FSFAST hierarchy.
     * @param copy_only Only copy dicom files to output directory (implies -no-convert).
     * @param no_convert Do not convert to output format.
     * @param force_update Convert even if output is newer than the input dicom.
     * @param max Print out max in given dicom file.
     * @param base Report filename without path.
     * @param key_string Put keystring before each run line (good for searching).
     * @param index_out Save index of files to index.out.dat (for re-use).
     * @param index_in Read index of files (can make things much faster on 2nd run).
     * @param it_dicom Add -it dicom to mri_convert cmd line.
     * @param no_exit_on_error Continue to unpack data even if there is an error in conversion.
     * @param run_skip Skip a given run (good when using -auto-runseq).
     * @param no_rescale_dicom Turn off DICOM rescaling based on tags (0028,1052) (0028,1053).
     * @param rescale_dicom Turn DICOM rescaling on.
     * @param no_dwi Turn off trying to read DWI parameters.
     * @param iid Set -iid to mri_convert.
     * @param ijd Set -ijd to mri_convert.
     * @param ikd Set -ikd to mri_convert.
     * @param extra_info Add session info to each line of the info file (pat, date, man, scan, field, serno).
     * @param first_dicom Copy first dicom file into output folder.
     * @param no_dcm2niix Turn off dcm2niix conversion.
     * @param phase Add the string _phase to volumes that are phase images based on ImageType.
     * @param fips Fips parameters: project, site, birnid, visit.
     * @param fips_run Fips-run parameters: run paradigm.
     * @param xml_only For fips, only create xml file, do not convert to output.
     * @param log Log output to a file.
     * @param debug Enable debug mode.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "dcmunpack" as const,
        "src": src,
        "keep_scouts": keep_scouts,
        "one_per_dir": one_per_dir,
        "no_infodump": no_infodump,
        "generic": generic,
        "copy_only": copy_only,
        "no_convert": no_convert,
        "force_update": force_update,
        "max": max,
        "base": base,
        "it_dicom": it_dicom,
        "no_exit_on_error": no_exit_on_error,
        "no_rescale_dicom": no_rescale_dicom,
        "rescale_dicom": rescale_dicom,
        "no_dwi": no_dwi,
        "extra_info": extra_info,
        "first_dicom": first_dicom,
        "no_dcm2niix": no_dcm2niix,
        "phase": phase,
        "xml_only": xml_only,
        "debug": debug,
    };
    if (targ !== null) {
        params["targ"] = targ;
    }
    if (run !== null) {
        params["run"] = run;
    }
    if (auto_runseq !== null) {
        params["auto_runseq"] = auto_runseq;
    }
    if (scanonly !== null) {
        params["scanonly"] = scanonly;
    }
    if (ext !== null) {
        params["ext"] = ext;
    }
    if (pre !== null) {
        params["pre"] = pre;
    }
    if (pat !== null) {
        params["pat"] = pat;
    }
    if (key_string !== null) {
        params["key_string"] = key_string;
    }
    if (index_out !== null) {
        params["index_out"] = index_out;
    }
    if (index_in !== null) {
        params["index_in"] = index_in;
    }
    if (run_skip !== null) {
        params["run_skip"] = run_skip;
    }
    if (iid !== null) {
        params["iid"] = iid;
    }
    if (ijd !== null) {
        params["ijd"] = ijd;
    }
    if (ikd !== null) {
        params["ikd"] = ikd;
    }
    if (fips !== null) {
        params["fips"] = fips;
    }
    if (fips_run !== null) {
        params["fips_run"] = fips_run;
    }
    if (log !== null) {
        params["log"] = log;
    }
    return params;
}


function dcmunpack_cargs(
    params: DcmunpackParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("dcmunpack");
    cargs.push(
        "-src",
        (params["src"] ?? null)
    );
    if ((params["targ"] ?? null) !== null) {
        cargs.push(
            "-targ",
            (params["targ"] ?? null)
        );
    }
    if ((params["run"] ?? null) !== null) {
        cargs.push(
            "-run",
            (params["run"] ?? null)
        );
    }
    if ((params["auto_runseq"] ?? null) !== null) {
        cargs.push(
            "-auto-runseq",
            (params["auto_runseq"] ?? null)
        );
    }
    if ((params["keep_scouts"] ?? null)) {
        cargs.push("-keep-scouts");
    }
    if ((params["scanonly"] ?? null) !== null) {
        cargs.push(
            "-scanonly",
            (params["scanonly"] ?? null)
        );
    }
    if ((params["one_per_dir"] ?? null)) {
        cargs.push("-one-per-dir");
    }
    if ((params["ext"] ?? null) !== null) {
        cargs.push(
            "-ext",
            (params["ext"] ?? null)
        );
    }
    if ((params["pre"] ?? null) !== null) {
        cargs.push(
            "-pre",
            (params["pre"] ?? null)
        );
    }
    if ((params["pat"] ?? null) !== null) {
        cargs.push(
            "-pat",
            (params["pat"] ?? null)
        );
    }
    if ((params["no_infodump"] ?? null)) {
        cargs.push("-no-infodump");
    }
    if ((params["generic"] ?? null)) {
        cargs.push("-generic");
    }
    if ((params["copy_only"] ?? null)) {
        cargs.push("-copy-only");
    }
    if ((params["no_convert"] ?? null)) {
        cargs.push("-no-convert");
    }
    if ((params["force_update"] ?? null)) {
        cargs.push("-force-update");
    }
    if ((params["max"] ?? null)) {
        cargs.push("-max");
    }
    if ((params["base"] ?? null)) {
        cargs.push("-base");
    }
    if ((params["key_string"] ?? null) !== null) {
        cargs.push(
            "-key",
            (params["key_string"] ?? null)
        );
    }
    if ((params["index_out"] ?? null) !== null) {
        cargs.push(
            "-index-out",
            (params["index_out"] ?? null)
        );
    }
    if ((params["index_in"] ?? null) !== null) {
        cargs.push(
            "-index-in",
            (params["index_in"] ?? null)
        );
    }
    if ((params["it_dicom"] ?? null)) {
        cargs.push("-itdicom");
    }
    if ((params["no_exit_on_error"] ?? null)) {
        cargs.push("-no-exit-on-error");
    }
    if ((params["run_skip"] ?? null) !== null) {
        cargs.push(
            "-run-skip",
            (params["run_skip"] ?? null)
        );
    }
    if ((params["no_rescale_dicom"] ?? null)) {
        cargs.push("-no-rescale-dicom");
    }
    if ((params["rescale_dicom"] ?? null)) {
        cargs.push("-rescale-dicom");
    }
    if ((params["no_dwi"] ?? null)) {
        cargs.push("-no-dwi");
    }
    if ((params["iid"] ?? null) !== null) {
        cargs.push(
            "-iid",
            ...(params["iid"] ?? null).map(String)
        );
    }
    if ((params["ijd"] ?? null) !== null) {
        cargs.push(
            "-ijd",
            ...(params["ijd"] ?? null).map(String)
        );
    }
    if ((params["ikd"] ?? null) !== null) {
        cargs.push(
            "-ikd",
            ...(params["ikd"] ?? null).map(String)
        );
    }
    if ((params["extra_info"] ?? null)) {
        cargs.push("-extra-info");
    }
    if ((params["first_dicom"] ?? null)) {
        cargs.push("-first-dicom");
    }
    if ((params["no_dcm2niix"] ?? null)) {
        cargs.push("-no-dcm2niix");
    }
    if ((params["phase"] ?? null)) {
        cargs.push("-phase");
    }
    if ((params["fips"] ?? null) !== null) {
        cargs.push(
            "-fips",
            (params["fips"] ?? null)
        );
    }
    if ((params["fips_run"] ?? null) !== null) {
        cargs.push(
            "-fips-run",
            (params["fips_run"] ?? null)
        );
    }
    if ((params["xml_only"] ?? null)) {
        cargs.push("-xml-only");
    }
    if ((params["log"] ?? null) !== null) {
        cargs.push(
            "-log",
            (params["log"] ?? null)
        );
    }
    if ((params["debug"] ?? null)) {
        cargs.push("-debug");
    }
    return cargs;
}


function dcmunpack_outputs(
    params: DcmunpackParameters,
    execution: Execution,
): DcmunpackOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: DcmunpackOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function dcmunpack_execute(
    params: DcmunpackParameters,
    execution: Execution,
): DcmunpackOutputs {
    /**
     * Sorts and converts a directory of DICOM files (Siemens, GE, Philips) into an output hierarchy with nifti (nii), mgh, mgz, or analyze output formats.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `DcmunpackOutputs`).
     */
    params = execution.params(params)
    const cargs = dcmunpack_cargs(params, execution)
    const ret = dcmunpack_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function dcmunpack(
    src: string,
    targ: string | null = null,
    run: string | null = null,
    auto_runseq: string | null = null,
    keep_scouts: boolean = false,
    scanonly: string | null = null,
    one_per_dir: boolean = false,
    ext: string | null = null,
    pre: string | null = null,
    pat: string | null = null,
    no_infodump: boolean = false,
    generic: boolean = false,
    copy_only: boolean = false,
    no_convert: boolean = false,
    force_update: boolean = false,
    max: boolean = false,
    base: boolean = false,
    key_string: string | null = null,
    index_out: string | null = null,
    index_in: string | null = null,
    it_dicom: boolean = false,
    no_exit_on_error: boolean = false,
    run_skip: string | null = null,
    no_rescale_dicom: boolean = false,
    rescale_dicom: boolean = false,
    no_dwi: boolean = false,
    iid: Array<number> | null = null,
    ijd: Array<number> | null = null,
    ikd: Array<number> | null = null,
    extra_info: boolean = false,
    first_dicom: boolean = false,
    no_dcm2niix: boolean = false,
    phase: boolean = false,
    fips: string | null = null,
    fips_run: string | null = null,
    xml_only: boolean = false,
    log: string | null = null,
    debug: boolean = false,
    runner: Runner | null = null,
): DcmunpackOutputs {
    /**
     * Sorts and converts a directory of DICOM files (Siemens, GE, Philips) into an output hierarchy with nifti (nii), mgh, mgz, or analyze output formats.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param src Dicom source directory. You can specify more than one.
     * @param targ Output directory. Do not need to include when just getting information about what is in the directory.
     * @param run Specify unpacking rules for a given run (series). Eg, "-run 3 bold nii f.nii".
     * @param auto_runseq Save all scans in the targetdir as runo.seqname.format.
     * @param keep_scouts Unpack series with 'scout' or 'setter' in the name.
     * @param scanonly Only scan the directory and put result in file.
     * @param one_per_dir Assume that there is only one dicom series in each subdir.
     * @param ext Input extension (eg, dcm).
     * @param pre Input prefix (i.e., input file name init string).
     * @param pat Input pattern (i.e., string that occurs in the middle of file name).
     * @param no_infodump Do not create the fname-infodump.dat file.
     * @param generic Do not use FSFAST hierarchy.
     * @param copy_only Only copy dicom files to output directory (implies -no-convert).
     * @param no_convert Do not convert to output format.
     * @param force_update Convert even if output is newer than the input dicom.
     * @param max Print out max in given dicom file.
     * @param base Report filename without path.
     * @param key_string Put keystring before each run line (good for searching).
     * @param index_out Save index of files to index.out.dat (for re-use).
     * @param index_in Read index of files (can make things much faster on 2nd run).
     * @param it_dicom Add -it dicom to mri_convert cmd line.
     * @param no_exit_on_error Continue to unpack data even if there is an error in conversion.
     * @param run_skip Skip a given run (good when using -auto-runseq).
     * @param no_rescale_dicom Turn off DICOM rescaling based on tags (0028,1052) (0028,1053).
     * @param rescale_dicom Turn DICOM rescaling on.
     * @param no_dwi Turn off trying to read DWI parameters.
     * @param iid Set -iid to mri_convert.
     * @param ijd Set -ijd to mri_convert.
     * @param ikd Set -ikd to mri_convert.
     * @param extra_info Add session info to each line of the info file (pat, date, man, scan, field, serno).
     * @param first_dicom Copy first dicom file into output folder.
     * @param no_dcm2niix Turn off dcm2niix conversion.
     * @param phase Add the string _phase to volumes that are phase images based on ImageType.
     * @param fips Fips parameters: project, site, birnid, visit.
     * @param fips_run Fips-run parameters: run paradigm.
     * @param xml_only For fips, only create xml file, do not convert to output.
     * @param log Log output to a file.
     * @param debug Enable debug mode.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `DcmunpackOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(DCMUNPACK_METADATA);
    const params = dcmunpack_params(src, targ, run, auto_runseq, keep_scouts, scanonly, one_per_dir, ext, pre, pat, no_infodump, generic, copy_only, no_convert, force_update, max, base, key_string, index_out, index_in, it_dicom, no_exit_on_error, run_skip, no_rescale_dicom, rescale_dicom, no_dwi, iid, ijd, ikd, extra_info, first_dicom, no_dcm2niix, phase, fips, fips_run, xml_only, log, debug)
    return dcmunpack_execute(params, execution);
}


export {
      DCMUNPACK_METADATA,
      DcmunpackOutputs,
      DcmunpackParameters,
      dcmunpack,
      dcmunpack_params,
};
